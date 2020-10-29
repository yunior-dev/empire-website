from django.shortcuts import render

from .models import Listing


def index(request):
    listings = Listing.objects.all()

    template = 'listings/listings.html'
    context = {'listings': listings}
    return render(request, template, context)


def listing(request):
    template = 'listings/listing.html'
    context = {}
    return render(request, template, context)


def search(request):
    template = 'listings/search.html'
    context = {}
    return render(request, template, context)
