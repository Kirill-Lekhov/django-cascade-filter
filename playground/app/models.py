from app.choice import BookGenre

from django.db import models
from django.contrib.postgres.fields import ArrayField


class BookFilter(models.Model):
	filter = models.JSONField(null=True, blank=True)


class Author(models.Model):
	name = models.CharField(max_length=300)


class Book(models.Model):
	title = models.CharField(max_length=200)
	keywords = ArrayField(models.CharField(max_length=50))
	is_published = models.BooleanField()
	published_at = models.DateField(blank=True, null=True)
	pages_count = models.PositiveBigIntegerField()
	genre = models.CharField(max_length=50, choices=BookGenre.choices)
	author = models.ForeignKey(Author, on_delete=models.PROTECT)
	note = models.TextField(blank=True, null=True)
	public_uuid = models.UUIDField(blank=True, null=True)
