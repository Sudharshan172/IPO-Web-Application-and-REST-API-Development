from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IPOViewSet

router = DefaultRouter()
router.register(r'ipos', IPOViewSet, basename='ipo')

urlpatterns = [
    path('', include(router.urls)),
]
