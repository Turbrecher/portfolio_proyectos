from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=80)
    date = models.DateField()
    author = models.CharField(max_length=100)
    website_url = models.CharField(max_length=100)