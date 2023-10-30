from django.db import models


class Employee(models.Model):
    '''Работник:
    full_name - Полное имя
    account - Учётная запись
    email - Электронная почта
    phone_number - Номер телефона
    groups - Название группы работника
    '''
    full_name = models.CharField(max_length=32)
    account = models.CharField(max_length=32, blank=True)
    email = models.CharField(max_length=32, blank=True)
    phone_number = models.CharField(max_length=32, blank=True)
    group = models.CharField(max_length=32, blank=True)

    def __str__(self):
        return self.full_name
