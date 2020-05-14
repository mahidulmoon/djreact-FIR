from rest_framework import serializers
from .models import firregister

class FIRSerializer(serializers.ModelSerializer):
    class Meta:
        model=firregister
        fields=['name','age','address','incDT','typeComplaint']


class GetFirSerializer(serializers.ModelSerializer):
    class Meta:
        model=firregister
        fields="__all__"

