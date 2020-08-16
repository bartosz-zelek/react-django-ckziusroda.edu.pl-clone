from django.urls import path, include, re_path
from rest_framework import routers
from . import views


urlpatterns = [
    path('news/', views.NewsListView.as_view(), name='news_list'),
    path('posts/<category_slug>/', views.PostsByCategoryList.as_view(),
         name='posts_by_category')
    # path('posts/', views.PostsByCategoryList.as_view())
]
