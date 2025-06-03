from app.models import Book, Author
from app.choice import BookGenre

from typing import List

from cascade_filter.meta import Table
from cascade_filter.meta.field import (
	TextField, ArrayField, BooleanField, ChoiceField, DateField, NumericField,
)
from cascade_filter.meta.choice import Choice


def get_keywords() -> List[Choice]:
	result = set()

	for keywords in Book.objects.all().values_list("keywords", flat=True):
		result |= set(keywords)

	return [Choice(i, i) for i in sorted(result)]


def get_authors() -> List[Choice]:
	result = []

	for author_id, author_name in Author.objects.all().values_list("id", "name"):
		result.append(Choice(author_name, author_id))

	return result


class BookTable(Table):
	title = TextField("Название")
	keywords = ArrayField("Ключевые слова", choices=get_keywords)
	is_published = BooleanField("Опубликована")
	published_at = DateField("Дата публикации", nullable=True)
	pages_count = NumericField("Количество страниц")
	genre = ChoiceField("Жанр", choices=[Choice(i.label, i.value) for i in BookGenre])
	author_id = ChoiceField("Автор", choices=get_authors)
	note = TextField("Заметка", nullable=True)
