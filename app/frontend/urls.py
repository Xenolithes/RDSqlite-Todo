from django.urls import path
from . import views
# the . in the import above says to look in the current file for the views file
urlpatterns = [
    path('', views.index)
]