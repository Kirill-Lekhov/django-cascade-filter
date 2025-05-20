from app.models import BookFilter
from app.core.book import BookTable

from django import forms
from cascade_filter.django.field import CascadeFilterField


class BookFilterAdminForm(forms.ModelForm):
	filter = CascadeFilterField(table_meta=BookTable, required=False)

	class Meta:
		model = BookFilter
		fields = ["filter"]
