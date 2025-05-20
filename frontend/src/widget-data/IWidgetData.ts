import type IFilter from "@/filter/IFilter"


export default interface IWidgetData {
	filterEditorVersion: number
	filter: IFilter | null
}
