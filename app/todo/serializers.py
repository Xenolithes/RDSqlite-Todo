from rest_framework import serializers
from todo.models import todo


#Todo Serializer
class todoSerializer(serializers.ModelSerializer):
    class Meta:
        model = todo
        fields = '__all__'