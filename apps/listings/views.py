from django.shortcuts import render


def index(request):
    template = 'listings/listings.html'
    context = {}
    return render(request, template, context)


def listing(request):
    template = 'listings/listing.html'
    context = {}
    return render(request, template, context)


def search(request):
    template = 'listings/search.html'
    context = {}
    return render(request, template, context)
