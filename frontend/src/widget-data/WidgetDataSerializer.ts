import type IWidgetData from "@/widget-data/IWidgetData"

import { InterfaceSerializer } from "json-twdc"
import { AnyField, NumberField } from "json-twdc/field"


export default class WidgetDataSerializer extends InterfaceSerializer<IWidgetData> {
	fields = {
		filterEditorVersion: NumberField(),
		filter: AnyField(),
	}
}
