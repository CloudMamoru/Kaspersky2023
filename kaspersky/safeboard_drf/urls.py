from django.contrib import admin
from django.urls import path
from employees.views import EmployeesAPIList
from django.shortcuts import render


def index_view(request):
    return render(request, 'build/index.html')

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/employees/", EmployeesAPIList.as_view()),
    path('', index_view, name='index'),
]
