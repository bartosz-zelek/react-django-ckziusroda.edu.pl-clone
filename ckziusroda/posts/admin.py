from django.contrib import admin
from .models import News, Image, Video


class ImageInline(admin.StackedInline):
    model = Image
    extra = 0


class VideoInline(admin.StackedInline):
    model = Video
    extra = 0


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    inlines = [ImageInline, VideoInline]
