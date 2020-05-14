from django.db import models
import datetime
# Create your models here.
class firregister(models.Model):
    name=models.CharField(max_length=25)
    age = models.CharField(max_length=25)
    address = models.TextField()
    incDT = models.CharField(max_length=25)
    dateofreg = models.DateField( default=datetime.date.today,blank=True)
    typeComplaint = models.CharField(max_length=50)
    section = models.CharField(max_length=25,default="Section-99")
    status = models.CharField(max_length=30,default="Pending")

