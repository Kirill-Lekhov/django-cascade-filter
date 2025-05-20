import { getElementJSONContent } from "@/generic/dom"
import type IWidgetData from "@/widget-data/IWidgetData"
import WidgetDataSerializer from "@/widget-data/WidgetDataSerializer"
import { VERSION } from "@/const"
import { deserialize as deserializeFilter } from "@/filter/serialization"


export function loadWidgetData(elementId: string): IWidgetData {
	let rawContent: any

	try {
		rawContent = getElementJSONContent(elementId)
	} catch (error) {
		console.error(error)
		console.warn("The default widget data will be used")
		rawContent = null
	}

	let widgetData: IWidgetData

	if (rawContent) {
		const serializer = new WidgetDataSerializer()
		widgetData = serializer.deserialize(rawContent)

		if (widgetData.filter) {
			widgetData.filter = deserializeFilter(widgetData.filter)
		}
	} else {
		widgetData = {
			filterEditorVersion: VERSION,
			filter: null,
		}
	}

	return widgetData
}
