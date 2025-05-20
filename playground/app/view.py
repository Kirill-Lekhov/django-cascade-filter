from app.models import Book, BookFilter

from django.views.generic.base import View
from django.http.response import JsonResponse
from cascade_filter.django.filter import Filter
from cascade_filter.filter.deserialization import deserialize


class BookListAPIView(View):
	def get(self, request):
		qs = Book.objects.all().select_related("author")
		qs_filter_data = BookFilter.objects.first()

		if raw_cascade_filter := qs_filter_data and qs_filter_data.filter and qs_filter_data.filter["filter"]:
			cascade_filter = Filter(deserialize(raw_cascade_filter))
			qs = cascade_filter.filter(qs)

		serialized_data = []

		for book in qs:
			serialized_data.append(
				{
					"title": book.title,
					"keywords": book.keywords,
					"is_published": book.is_published,
					"published_at": book.published_at.isoformat() if book.published_at else None,
					"pages_count": book.pages_count,
					"genre": book.genre,
					"author": book.author.name,
				}
			)

		return JsonResponse(serialized_data, safe=False)
