from django.urls import include, path

urlpatterns = [
    # Add your web urls here
    path('listings/', include('apps.listings.urls')),
    path('', include('apps.pages.urls')),
]
