from rest_framework import serializers
from django.core.validators import URLValidator
from ..models import News, ImageNews, VideoNews, Post, ImagePost, VideoPost, Category, Document


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


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        exclude = ('slug',)


class ManipulatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('category', 'title', 'slug',
                  'content', 'owner', 'category_slug')

    def validate_links(self, video_links):
        if (video_links):
            try:
                validated_links = []
                url_validator = URLValidator()
                for video_link in video_links.split(','):
                    _video_link = video_link.strip()
                    url_validator(_video_link)
                    validated_links.append(_video_link)
                return validated_links
            except:
                raise serializers.ValidationError(
                    "Niepoprawny format adresów URL.")

        return False


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ('document',)
