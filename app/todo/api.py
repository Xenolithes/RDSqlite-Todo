from todo.models import todo
from rest_framework import viewsets, permissions
from .serializers import todoSerializer


# Todo Viewset
# This is what makes the CRUD applications possible
class TodoViewSet(viewsets.ModelViewSet):
    queryset = todo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = todoSerializer