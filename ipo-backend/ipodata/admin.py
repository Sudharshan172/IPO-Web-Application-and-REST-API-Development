from django.contrib import admin
from .models import IPO

@admin.register(IPO)
class IPOAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'price_band', 'issue_type', 'issue_size', 'open_date', 'close_date', 'listing_date')
    search_fields = ('company_name', 'issue_type')
    list_filter = ('issue_type', 'open_date', 'listing_date')
