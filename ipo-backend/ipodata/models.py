from django.db import models

class IPO(models.Model):
    company_name = models.CharField(max_length=255, default="Test Company")
    logo_url = models.URLField(default="https://play.google.com/store/apps/details?id=com.nse.nseindia")
    price_band = models.CharField(max_length=50, default="100-120")
    issue_type = models.CharField(max_length=50, default="Book Built")
    issue_size = models.CharField(max_length=50, default=1000)
    open_date = models.DateField(null=True, blank=True)
    close_date = models.DateField(null=True, blank=True)
    listing_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.company_name
