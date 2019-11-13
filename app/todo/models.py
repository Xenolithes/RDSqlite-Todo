from django.db import models

# Create your models here.
# Database model for todo app
# python manage.py makemigrations appname
# python manage.py migrate
class todo(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    message= models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    