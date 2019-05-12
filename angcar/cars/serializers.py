from rest_framework import serializers
from cars.models import Engine, Wheels, Interior, CarModel


COMMON_FIELDS = ['id', 'name', 'image', 'price']

class EngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Engine
        fields = COMMON_FIELDS


class WheelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wheels
        fields = COMMON_FIELDS


class InteriorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interior
        fields = COMMON_FIELDS


class CarModelSerializer(serializers.ModelSerializer):
    engines = EngineSerializer(many=True)
    wheels = WheelsSerializer(many=True)
    interiors = InteriorSerializer(many=True)

    class Meta:
        model = CarModel
        fields = ['name', 'base_price', 'engines', 'wheels', 'interiors']