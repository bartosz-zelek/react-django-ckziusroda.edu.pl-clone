from django.urls import path, include
from .api import urls

app_name = 'api'

urlpatterns = [
    path('api/', include('posts.api.urls')),
]
