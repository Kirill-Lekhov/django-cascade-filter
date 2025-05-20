import IChoiceSerializer from "@/choice/IChoiceSerializer"
import FieldType from "@/meta/FieldType"
import type TableFieldMeta from "@/meta/TableFieldMeta"

import { InterfaceSerializer } from "json-twdc"
import { ArrayField, BooleanField, EnumField, ObjectField, StringField } from "json-twdc/field"
import { Optional } from "json-twdc/modifier"


export default class TableFieldMetaSerializer extends InterfaceSerializer<TableFieldMeta> {
	fields = {
		label: StringField(),
		name: StringField(),
		nullable: BooleanField(),
		type: EnumField(FieldType),
		choices: Optional(ArrayField(ObjectField(new IChoiceSerializer()))),
	}
}
