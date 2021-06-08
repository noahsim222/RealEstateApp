from django.urls import path
from .views import *

urlpatterns = [
    path("", ListingsView.as_view(), name="listingsList"),
    path("<slug>", ListingView.as_view(), name="listingDetails"),
    path("search", SearchView.as_view(), name="search"),
]
