from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Realtor
from .serializers import RealtorSerializer

# Create your views here.

# Getting a List of Realtors
class RealtorListView(ListAPIView):
    permission_classes = (permission.AllowAny, )
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer
    pagination_class = None  #Default list will be paginated



# Retrieving a single Realtor by Id
class RealtorView(RetrieveAPIView):
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer
