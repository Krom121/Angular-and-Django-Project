from rest_framework import serializers
from orders.models import Order


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = [
            'id',
            'engine',
            'wheels',
            'exterior_color',
            'interior',
            'autopilot',
            'firstname',
            'lastname',
            'phone',
            'email',
            'card_number',
            'card_date',
        ]
    
    def validate_card_number(self, value):
        if len(value) != 16:
            raise serializers.ValidationError('Number must have exactly 16 digits')
        if value[0] != '4':
            raise serializers.ValidationError('Card number is not valid')
        return value
    
    