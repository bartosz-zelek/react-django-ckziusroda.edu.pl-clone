from rest_framework import serializers
from ..models import News, ImageNews, VideoNews, Post, ImagePost, VideoPost


class ImageNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageNews
        fields = ('render',)


class VideoNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoNews
        fields = ('render',)


class ImagePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagePost
        fields = ('render',)


class VideoPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoPost
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
        fields = ('id', 'category_name', 'title', 'slug', 'markdown_content',
                  'created_date', 'owner_fullname', 'category_slug')


class PostSerializer(serializers.ModelSerializer):
    images = ImagePostSerializer(many=True)
    videos = VideoPostSerializer(many=True)

    class Meta:
        model = Post
        fields = ('id', 'category_name', 'title', 'markdown_content_full', 'images',
                  'videos', 'created_date', 'owner_fullname', 'optional_authors')
