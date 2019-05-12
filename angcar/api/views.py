from rest_framework import viewsets
from cars.models import CarModel
from cars.serializers import CarModelSerializer



class CarModelVS(viewsets.ReadOnlyModelViewSet):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer