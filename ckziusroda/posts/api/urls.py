from django.urls import path
from . import views


urlpatterns = [
    path('news/', views.NewsListView.as_view(), name='news_list')
]
