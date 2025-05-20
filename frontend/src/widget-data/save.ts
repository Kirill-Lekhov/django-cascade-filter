import type IFilter from "@/filter/IFilter"
import type IWidgetData from "@/widget-data/IWidgetData"
import { VERSION } from "@/const"


export function saveFilter(filter: IFilter | null, elementId: string): void {
	const element = document.getElementById(elementId)

	if (!element) {
		throw new Error(`The element with id "${elementId}" was not found`)
	}

	const widgetData: IWidgetData = { filter: filter, filterEditorVersion: VERSION }
	element.textContent = JSON.stringify(widgetData)
}
