from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from authentication.models import Credentials  # ✅ updated model import

@api_view(['POST'])
def register(request):
    try:
        name = request.data.get("name")
        email = request.data.get("email")
        password = request.data.get("password")

        if not name or not email or not password:
            return Response({"error": "All fields are required"}, status=400)

        if Credentials.objects.filter(username=name).exists():
            return Response({"error": "Username already taken. Please choose another."}, status=400)

        if Credentials.objects.filter(email=email).exists():
            return Response({"error": "Email already registered."}, status=400)

        user = Credentials.objects.create_user(username=name, email=email, password=password)
        user.name = name  # Optional (already set above)
        user.save()

        return Response({"message": "User registered successfully!"}, status=201)

    except Exception as e:
        return Response({"error": f"Unexpected error: {str(e)}"}, status=500)


@api_view(['POST'])
def login(request):
    email = request.data.get("email")
    password = request.data.get("password")

    if not email or not password:
        return Response({"error": "Email and password are required"}, status=400)

    try:
        user = Credentials.objects.get(email=email)

        if user and user.check_password(password):
            refresh = RefreshToken.for_user(user)

            return Response({
                "access_token": str(refresh.access_token),
                "refresh_token": str(refresh),
                "role": user.role,
                "name": user.name,
                "email": user.email
            }, status=200)

        return Response({"error": "Invalid credentials"}, status=401)

    except Credentials.DoesNotExist:
        return Response({"error": "Invalid credentials"}, status=401)
