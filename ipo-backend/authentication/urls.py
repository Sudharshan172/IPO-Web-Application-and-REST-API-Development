from django.urls import path
from .views import register, login

urlpatterns = [
    path("signupnow/", register, name="register"),
    path("signin/", login, name="login"),
]
