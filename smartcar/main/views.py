from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .forms import CarInputForm
from .models import CarInfo, PiInfo, ContainerInfo
from django.http import HttpResponseRedirect, HttpResponse

@csrf_exempt
def Car_input(request):
    car_name = request.POST['car_name']
    pi_id = request.POST['pi_id']
    carin = CarInfo.objects.create()
    carin.car_name = car_name
    carin.pi_id = PiInfo.objects.get(pi_id=pi_id)
    carin.save()
    return HttpResponseRedirect('/')

@csrf_exempt
def Container_input(request):
    car_id = request.POST['id']
    container_id = request.POST['container_id']
    carin = CarInfo.objects.get(id=car_id)
    carin.container_id = ContainerInfo.objects.get(container_id=container_id)
    carin.save()
    return HttpResponseRedirect('/')

@csrf_exempt
def Car_detail(request):
    num = request.POST['carNumber']
    return render(request, 'car_detail.html', {'carNumber': num})


