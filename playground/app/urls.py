from app.view import BookListAPIView

from django.urls import path


urlpatterns = [
	path("", BookListAPIView.as_view(), name="api-book-list"),
]
