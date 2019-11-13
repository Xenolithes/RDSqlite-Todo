from django.shortcuts import render

# Create your views here.
# This will automatically look in the frontend templates directory for the specified html
def index(request):
    return render(request, 'frontend/index.html')