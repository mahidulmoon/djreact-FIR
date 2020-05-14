from django.urls import path,include
from rest_framework import routers
from .views import FIRViewset,GetFirViewset,delete_fir

router = routers.DefaultRouter()
router.register('register',FIRViewset)
router.register('getcomplain',GetFirViewset)

urlpatterns = [
    path('',include(router.urls)),
    path('delete/<int:pk>/',delete_fir),
]
