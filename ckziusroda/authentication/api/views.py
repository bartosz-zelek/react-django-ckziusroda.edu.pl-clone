from rest_framework import generics, permissions
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


class UserAPI(generics.RetrieveAPIView):
    # token needed, because of default settings
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.UserSerializer

    def get_object(self):
        return self.request.user
