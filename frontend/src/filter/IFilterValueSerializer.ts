import type IFilterValue from "@/filter/IFilterValue"

import { InterfaceSerializer } from "json-twdc"
import { AnyField, StringField } from "json-twdc/field"


export default class IFilterValueSerializer extends InterfaceSerializer<IFilterValue> {
	fields = {
		label: StringField(),
		value: AnyField(),
	}
}
