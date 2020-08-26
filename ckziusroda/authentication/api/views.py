from rest_framework import generics
from rest_framework.response import Response
from knox.models import AuthToken
from . import serializers


class LoginAPI(generics.GenericAPIView):
    serializer_class = serializers.LoginSerializer

    def post(self, request, *args, **kwargs):
        # raise an exception if there is validation error
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response({
            'user': serializers.UserSerializer(user, context=self.get_serializer_context()).data,
            'token': token
        })
