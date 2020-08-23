from django.urls import path, include, re_path
from rest_framework import routers
from . import views


urlpatterns = [
    path('news/', views.NewsListView.as_view(), name='news_list'),
    path('posts/<slug:category_slug>/',
         views.PostsByCategoryList.as_view(), name='posts_by_category'),
    path('posts/search/<str:search_phrase>/',
         views.PostsByPhraseList.as_view(), name='posts_by_phrase'),
    path('posts/<slug:category_slug>/<slug:post_slug>/',
         views.PostBySlugDetail.as_view(), name='post_by_slug')
]
