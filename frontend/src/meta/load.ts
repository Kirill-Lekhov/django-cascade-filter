import { getElementJSONContent } from "@/generic/dom"
import TableMeta from "@/meta/TableMeta"
import TableFieldMetaSerializer from "@/meta/TableFieldMetaSerializer"


export function loadTableMeta(elementId: string): TableMeta {
	const rawContent = getElementJSONContent(elementId)
	const serializer = new TableFieldMetaSerializer()
	const fields = serializer.deserializeMany(rawContent)

	return new TableMeta(fields)
}
