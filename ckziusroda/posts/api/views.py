from rest_framework import generics, permissions
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination
from ..models import News, Post, Category
from .serializers import NewsSerializer, PostsSerializer, PostSerializer, CategoriesSerializer


class NewsList(generics.ListAPIView):
    queryset = News.objects.filter(public=True)[:6]
    serializer_class = NewsSerializer


class PostsByCategoryList(generics.ListAPIView):
    def get_queryset(self):
        return Post.objects.filter(category__slug=self.kwargs['category_slug'])
    serializer_class = PostsSerializer


class PostsByPhraseList(generics.ListAPIView):
    def get_queryset(self):
        qs = Post.objects.filter(content__icontains=self.kwargs['search_phrase']) | Post.objects.filter(
            title__icontains=self.kwargs['search_phrase'])
        return qs
    serializer_class = PostsSerializer


class PostsByDateList(generics.ListAPIView):
    def get_queryset(self):
        return Post.objects.filter(created__month=self.kwargs['month'], created__year=self.kwargs['year'])
    serializer_class = PostsSerializer


class PostBySlugDetail(generics.ListAPIView):
    def get_queryset(self):
        return Post.objects.filter(category__slug=self.kwargs['category_slug'], slug=self.kwargs['post_slug'])
    serializer_class = PostSerializer


class CategoriesList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer
