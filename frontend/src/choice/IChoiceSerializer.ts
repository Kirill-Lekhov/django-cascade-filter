import type IChoice from "@/choice/IChoice"

import { InterfaceSerializer } from "json-twdc"
import { AnyField, StringField } from "json-twdc/field"


export default class IChoiceSerializer extends InterfaceSerializer<IChoice> {
	fields = {
		label: StringField(),
		value: AnyField(),
	}
}
