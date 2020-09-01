from rest_framework import generics, permissions, viewsets
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination
from ..models import News, Post, Category, VideoPost
from .serializers import NewsSerializer, PostsSerializer, PostSerializer, CategoriesSerializer, ManipulatePostSerializer, DocumentSerializer


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


class CategoriesViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer


class PostsViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ManipulatePostSerializer

    def get_queryset(self):
        return self.request.user.posts.all()

    def perform_create(self, serializer):
        video_links = serializer.initial_data.get('videoLinks')
        validated_video_links = serializer.validate_links(video_links)
        if(validated_video_links):
            obj = serializer.save(owner=self.request.user)
            for validated_video_link in validated_video_links:
                VideoPost.objects.create(
                    post=obj, url=validated_video_link)


class DocumentCreateView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = DocumentSerializer
