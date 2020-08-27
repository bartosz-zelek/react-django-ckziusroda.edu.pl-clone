from django.urls import path, include
from knox import views as knox_views
from . import views


urlpatterns = [
    path('auth/login/', views.LoginAPI.as_view()),
    path('auth/user/', views.UserAPI.as_view()),
    path('auth/logout/', knox_views.LogoutView.as_view())
]
