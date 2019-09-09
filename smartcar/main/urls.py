from django.views.generic.base import TemplateView
from django.urls import path
from . import views
app_name = 'main'

urlpatterns = [
    path('', TemplateView.as_view(template_name='main.html'), name='main'),
    path('car_input/', TemplateView.as_view(template_name='car_input.html'), name='car_input'),
    path('car_detail', views.Car_detail, name='car_detail'),
    path('car_input', views.Car_input, name='carinput'),
    path('position', views.position, name='position'),
    path('straight_xy', views.straight_xy, name='straight_xy'),
    path('back_xy', views.back_xy, name='back_xy'),
    path('right_xy', views.right_xy, name='right_xy'),
    path('left_xy', views.left_xy, name='left_xy'),
    path('pi_test3', views.pi_test3, name='pi_test3'),
    path('pi_test4', views.pi_test4, name='pi_test4'),
    path('pi_test5', views.pi_test5, name='pi_test5'),
]