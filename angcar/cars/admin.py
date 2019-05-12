from django.contrib import admin
from cars.models import Engine, Wheels, Interior, CarModel


class EqipAdmin(admin.ModelAdmin):
    list_display = ['name', 'image', 'price']

class CarModelAdmin(admin.ModelAdmin):
    list_display = ['name']

admin.site.register([Engine, Wheels, Interior], EqipAdmin)
admin.site.register(CarModel, CarModelAdmin)
