from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class Credentials(AbstractUser):
    ROLE_CHOICES = [
        ('user', 'User'),
        ('admin', 'Admin'),
    ]

    email = models.EmailField(unique=True)  # Login will be via email
    name = models.CharField(max_length=255, default="Unknown")
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')

    # Rename related_name to avoid reverse accessor clashes
    groups = models.ManyToManyField(Group, related_name="credentials_groups", blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name="credentials_permissions", blank=True)

    USERNAME_FIELD = "email"           # Authentication via email
    REQUIRED_FIELDS = ["username", "name"]  # username is still required internally by AbstractUser

    def __str__(self):
        return f"{self.email} ({self.role})"
