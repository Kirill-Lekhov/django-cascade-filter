from django.db.models.enums import TextChoices


class BookGenre(TextChoices):
	FANTASY = "FANTASY", "Фантастика"
	PROSE = "PROSE", "Проза"
	FABLE = "FABLE", "Басня"
