from django.urls import path
from .views import *

urlpatterns = [
    path("", RealtorListView.as_view(), name="realtorsList"),
    path("topseller", TopSellerView.as_view(), name="topSellersList"),
    path("<pk>", RealtorView.as_view(), name="realtor"),
]
