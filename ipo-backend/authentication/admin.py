from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Credentials

@admin.register(Credentials)
class CredentialsAdmin(UserAdmin):
    model = Credentials
    list_display = ('email', 'name', 'role', 'is_active', 'is_staff')
    search_fields = ('email', 'name')
    ordering = ('email',)

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('name', 'role')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'name', 'role', 'password1', 'password2'),
        }),
    )
