from django.contrib import admin
from django.urls import path
from employees.views import EmployeesAPIList

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/employees/", EmployeesAPIList.as_view()),
]
