from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FIRSerializer,GetFirSerializer
from .models import firregister
from rest_framework.decorators import api_view
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
# Create your views here.

@api_view(['DELETE'])
def delete_fir(request,pk):
    try:
        result = firregister.objects.get(pk=pk)
        

    except firregister.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


    if request.method == 'DELETE':
        result.delete()
        #print(result)
        return Response(status=status.HTTP_204_NO_CONTENT)




class FIRViewset(viewsets.ModelViewSet):
    queryset = firregister.objects.all()
    serializer_class = FIRSerializer


class GetFirViewset(viewsets.ModelViewSet):
    queryset = firregister.objects.all()
    serializer_class = GetFirSerializer
    authentication_classes=[TokenAuthentication, ]
    permission_classes=[IsAuthenticated, ]

    #def destroy(self, request, *args, **kwargs):
        #try:
         #   instance = self.get_object()
         #   self.perform_destroy(instance)
        #except Http404:
         #   pass
        #return Response(status=status.HTTP_204_NO_CONTENT)

