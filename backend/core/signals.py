from django.dispatch import Signal, receiver
from django.core.mail import send_mail
from django.conf import settings
from .models import CustomUser

# Define the custom signal
user_verified_signal = Signal()  # providing_args=["user"] is deprecated

@receiver(user_verified_signal)
def send_welcome_email(sender, user, **kwargs):
    """
    Sends a welcome email to the user upon verification.
    """
    subject = "Pedagojik Uyku'ya Hoş Geldiniz!"
    message = f"Merhaba {user.email},\n\nPedagojik Uyku ailesine katıldığınız için teşekkür ederiz. Hesabınız başarıyla doğrulandı.\n\nKeyifli uykular dileriz!"
    from_email = settings.EMAIL_HOST_USER
    recipient_list = [user.email]

    # In a real app, use Celery for async email sending
    try:
        send_mail(subject, message, from_email, recipient_list, fail_silently=False)
    except Exception as e:
        # Log the error in production
        print(f"Failed to send welcome email: {e}")
