from django.contrib import admin
from .models import News, ImageNews, VideoNews, Post, ImagePost, VideoPost, Category, Document


class ImageNewsInline(admin.StackedInline):
    model = ImageNews
    extra = 0


class VideoNewsInline(admin.StackedInline):
    model = VideoNews
    extra = 0


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    inlines = [ImageNewsInline, VideoNewsInline]
    list_display = ('title', 'public')


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
    list_display = ('category', 'title', 'owner', 'public')

    def get_changeform_initial_data(self, request):
        get_data = super(PostAdmin, self).get_changeform_initial_data(request)
        get_data['owner'] = request.user.pk
        return get_data


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {
        'slug': ('name',)
    }


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'url')
