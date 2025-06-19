from rest_framework import viewsets
from .models import IPO
from .serializers import IPOSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class IPOViewSet(viewsets.ModelViewSet):
    queryset = IPO.objects.all()
    serializer_class = IPOSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
