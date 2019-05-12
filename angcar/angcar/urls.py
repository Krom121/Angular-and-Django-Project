from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.routers import DefaultRouter
from api.views import CarModelVS

router = DefaultRouter()
router.register(r'models', CarModelVS)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
