from rest_framework import serializers
from ..models import News, Image, Video


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('render',)


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ('render',)


class NewsSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)
    videos = VideoSerializer(many=True)

    class Meta:
        model = News
        fields = ('id', 'title', 'markdown_content', 'images', 'videos')
