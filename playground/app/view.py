from app.models import Book, BookFilter

from http import HTTPStatus

from django.views.generic.base import View
from django.http.response import JsonResponse
from cascade_filter.django.filter import Filter
from cascade_filter.filter.deserialization import deserialize
from cascade_filter.compliance_checker import ComplianceChecker


class BookListAPIView(View):
	def get(self, request):
		mode = request.GET.get("mode", "qs")		# "qs" - queryset / "cc" - compliance checker

		if mode == "qs":
			return self.get_books_qs()
		elif mode == "cc":
			return self.get_books_cc()

		return JsonResponse({"detail": "Unknown mode. Allowed values: \"qs\" or \"cc\""}, status=HTTPStatus.BAD_REQUEST)

	def get_books_qs(self) -> JsonResponse:
		qs = Book.objects.all().select_related("author")
		qs_filter_data = BookFilter.objects.first()

		if raw_cascade_filter := qs_filter_data and qs_filter_data.filter and qs_filter_data.filter["filter"]:
			cascade_filter = Filter(deserialize(raw_cascade_filter))
			qs = cascade_filter.filter(qs)

		return JsonResponse([self.serialize_book(book) for book in qs], safe=False)

	def get_books_cc(self) -> JsonResponse:
		qs = Book.objects.all().select_related("author")
		qs_filter_data = BookFilter.objects.first()

		if raw_cascade_filter := qs_filter_data and qs_filter_data.filter and qs_filter_data.filter["filter"]:
			compliance_checker = ComplianceChecker(deserialize(raw_cascade_filter))

		serialized_books = []

		for book in qs:
			if compliance_checker.is_fit(book):
				serialized_books.append(self.serialize_book(book))

		return JsonResponse(serialized_books, safe=False)

	def serialize_book(self, book: Book) -> dict:
		return {
			"title": book.title,
			"keywords": book.keywords,
			"is_published": book.is_published,
			"published_at": book.published_at.isoformat() if book.published_at else None,
			"pages_count": book.pages_count,
			"genre": book.genre,
			"author": book.author.name,
		}
