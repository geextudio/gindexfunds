from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

# The classes defined here mapped to a table in database

class FundAccounts(models.Model):

    username = models.CharField(max_length=30)

    password = models.CharField(max_length=50, blank=True)

    wechatid = models.CharField(max_length=100, default='')

    email = models.EmailField(max_length=100)

    createddate = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ("-username",)

    def __str__(self):
        return self.username