from django.db import models

class Order(models.Model):
    engine = models.ForeignKey('cars.Engine', on_delete=models.CASCADE)
    wheels = models.ForeignKey('cars.Wheels', on_delete=models.CASCADE)
    exterior_color = models.CharField(max_length=10)
    interior = models.ForeignKey('cars.Interior', on_delete=models.CASCADE)
    autopilot = models.BooleanField(default=False)

    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField()
    card_number = models.CharField(max_length=16)
    card_date = models.CharField(max_length=10)
