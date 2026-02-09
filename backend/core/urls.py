from django.urls import path
from .views import RegisterView, VerifyEmailView, AnalyticsTrackView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/verify-email/', VerifyEmailView.as_view(), name='verify-email'),
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('analytics/track/', AnalyticsTrackView.as_view(), name='analytics-track'),
]
