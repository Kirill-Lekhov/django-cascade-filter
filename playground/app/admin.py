from app.models import BookFilter, Book, Author
from app.form import BookFilterAdminForm

from django.contrib import admin


@admin.register(BookFilter)
class BookFilterAdmin(admin.ModelAdmin):
	form = BookFilterAdminForm


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
	list_display = ("title", "published_at")


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
	list_display = ("name", )
