from rest_framework import viewsets
from rest_framework import mixins
from cars.models import CarModel
from cars.serializers import CarModelSerializer
from orders.models import Order
from orders.serializers import OrderSerializer


class CarModelVS(viewsets.ReadOnlyModelViewSet):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer


class OrderViewset(mixins.CreateModelMixin,
                   viewsets.GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer