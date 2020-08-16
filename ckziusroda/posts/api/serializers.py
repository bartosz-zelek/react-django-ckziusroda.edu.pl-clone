from rest_framework import serializers
from ..models import News, ImageNews, VideoNews, Post


class ImageNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageNews
        fields = ('render',)


class VideoNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoNews
        fields = ('render',)


class NewsSerializer(serializers.ModelSerializer):
    images = ImageNewsSerializer(many=True)
    videos = VideoNewsSerializer(many=True)

    class Meta:
        model = News
        fields = ('id', 'title', 'markdown_content', 'images', 'videos')


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'category', 'title', 'slug', 'content',
                  'created', 'owner', 'optional_authors')
