from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    # Add your web urls here
    path('listings/', include('listings.urls')),
    path('', include('pages.urls')),
]
