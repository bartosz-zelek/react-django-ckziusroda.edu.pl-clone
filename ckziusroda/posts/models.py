from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.template.loader import render_to_string
from django.utils.safestring import mark_safe
from django.contrib.auth.models import User
from django.conf import settings
from django.template.defaultfilters import truncatewords_html
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.template.defaultfilters import slugify
from django.db import IntegrityError
from markdown import markdown
import os
import random
import datetime


class ImageBase(models.Model):
    file = models.ImageField(upload_to='images')

    class Meta:
        abstract = True
        verbose_name = "Zdjęcie"
        verbose_name_plural = "Zdjęcia"

    def filename(self):
        return os.path.basename(self.file.name)

    def render(self):
        return render_to_string('posts/content/image.html', {'item': self})


class VideoBase(models.Model):
    url = models.URLField()

    class Meta:
        abstract = True
        verbose_name = "Film"
        verbose_name_plural = "Filmy"

    def render(self):
        return render_to_string('posts/content/video.html', {'item': self})

############
### NEWS ###
############


class News(models.Model):
    title = models.CharField(
        max_length=200, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    public = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Aktualność"
        verbose_name_plural = "Aktualności"
        ordering = ['-created']

    def markdown_content(self):
        if self.content:
            return mark_safe(markdown(self.content))
        return ""

    def __str__(self):
        if self.title:
            return self.title
        return "Aktualność - {}".format(self.id)


class ImageNews(ImageBase):
    news = models.ForeignKey(
        News, related_name='images', on_delete=models.CASCADE, null=True, blank=True)


class VideoNews(VideoBase):
    news = models.ForeignKey(
        News, related_name='videos', on_delete=models.CASCADE, null=True, blank=True)

#############
### POSTS ###
#############


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)

    class Meta:
        verbose_name = "Kategoria"
        verbose_name_plural = "Kategorie"

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class Post(models.Model):
    category = models.ForeignKey(
        Category, related_name="posts", on_delete=models.CASCADE, null=False)
    title = models.CharField(
        max_length=200)
    slug = models.SlugField(blank=True)
    content = models.TextField()
    created = models.DateTimeField(
        auto_now_add=True)
    public = models.BooleanField(default=True)
    owner = models.ForeignKey(
        User, related_name="posts", on_delete=models.SET_NULL, null=True)
    optional_authors = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        verbose_name = "Post"
        verbose_name_plural = "Posty"
        ordering = ['-created']

    def save(self, *args, **kwargs):
        # unique_together caused error with transactions, I decided on this solution
        # TODO: user in django admin can intentionally force slug to be non unique - TO FIX
        edit_post = Post.objects.filter(id=self.pk)  # get if edit
        if not edit_post:
            self.slug = slugify(self.title)
            # unique together self and category
            if Post.objects.filter(slug=self.slug, category=self.category):
                self.slug = '{}-{}'.format(slugify(self.title),
                                           datetime.datetime.now().strftime("%s"))

        super(Post, self).save(*args, **kwargs)

    def created_date(self):
        return str(self.created.date())

    def owner_fullname(self):
        try:
            return str(self.owner.get_full_name())
        except:
            return "Administrator"

    def markdown_content(self):
        if self.content:
            return truncatewords_html(mark_safe(markdown(self.content)), 60)
        return ""

    def markdown_content_full(self):
        if self.content:
            return mark_safe(markdown(self.content))
        return ""

    def category_name(self):
        return str(self.category.name)

    def category_slug(self):
        return str(self.category.slug)

    def __str__(self):
        return self.title


class ImagePost(ImageBase):
    post = models.ForeignKey(Post, related_name="images",
                             on_delete=models.CASCADE, blank=True, null=True)


class VideoPost(VideoBase):
    post = models.ForeignKey(Post, related_name="videos",
                             on_delete=models.CASCADE, blank=True, null=True)

##############
###DOCUMENT###
##############


class Document(models.Model):
    document = models.FileField(upload_to="documents/%Y/%m/%d/")
    url = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        verbose_name = "Dokument"
        verbose_name_plural = "Dokumenty"

    def __str__(self):
        return os.path.basename(self.document.name)


@receiver(post_save, sender=Document)
def insert_document_url(sender, instance, **kwargs):
    path = 'media/' + instance.document.name
    sender.objects.filter(id=instance.id).update(url=path)
