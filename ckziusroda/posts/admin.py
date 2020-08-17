from django.contrib import admin
from .models import News, ImageNews, VideoNews, Post, ImagePost, VideoPost, Category


class ImageNewsInline(admin.StackedInline):
    model = ImageNews
    extra = 0


class VideoNewsInline(admin.StackedInline):
    model = VideoNews
    extra = 0


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    inlines = [ImageNewsInline, VideoNewsInline]


class ImagePostInline(admin.StackedInline):
    model = ImagePost
    extra = 0


class VideoPostInline(admin.StackedInline):
    model = VideoPost
    extra = 0


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {
        'slug': ('title',)
    }
    inlines = [ImagePostInline, VideoPostInline]

    def get_changeform_initial_data(self, request):
        get_data = super(PostAdmin, self).get_changeform_initial_data(request)
        get_data['owner'] = request.user.pk
        return get_data


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {
        'slug': ('name',)
    }
