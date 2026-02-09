from rest_framework import generics, status, views, permissions
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .serializers import UserRegistrationSerializer, AnalyticsEventSerializer
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.conf import settings
from .models import AnalyticsEvent, CustomUser
from .signals import user_verified_signal

User = get_user_model()

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        user = serializer.save(is_active=False)  # User is inactive until verified
        self.send_verification_email(user)

    def send_verification_email(self, user):
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        
        # Construct verification URL (pointing to frontend)
        # Assuming frontend runs on localhost:3000 for development
        domain = "http://localhost:3000" 
        verify_url = f"{domain}/verify-email?uid={uid}&token={token}"
        
        subject = "Hesabınızı Doğrulayın - Pedagojik Uyku"
        message = f"Hesabınızı oluşturduğunuz için teşekkürler. Lütfen hesabınızı doğrulamak için aşağıdaki bağlantıya tıklayın:\n\n{verify_url}"
        
        send_mail(
            subject,
            message,
            settings.EMAIL_HOST_USER,
            [user.email],
            fail_silently=False,
        )

class VerifyEmailView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        uidb64 = request.data.get('uid')
        token = request.data.get('token')

        if not uidb64 or not token:
            return Response({'error': 'UID ve token gerekli.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            if not user.is_verified:
                user.is_verified = True
                user.is_active = True
                user.save()
                
                # Send custom signal to trigger welcome email
                user_verified_signal.send(sender=user.__class__, user=user)
                return Response({'message': 'E-posta başarıyla doğrulandı!'}, status=status.HTTP_200_OK)
            else:
                 return Response({'message': 'E-posta zaten doğrulanmış.'}, status=status.HTTP_200_OK)

        else:
            return Response({'error': 'Geçersiz bağlantı veya süresi dolmuş.'}, status=status.HTTP_400_BAD_REQUEST)


class AnalyticsTrackView(generics.CreateAPIView):
    queryset = AnalyticsEvent.objects.all()
    serializer_class = AnalyticsEventSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        user = self.request.user if self.request.user.is_authenticated else None
        serializer.save(user=user)
