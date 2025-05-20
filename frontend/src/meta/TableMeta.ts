import type TableFieldMeta from "@/meta/TableFieldMeta"


export default class TableMeta {
	protected map: Map<TableFieldMeta["name"], TableFieldMeta>


	constructor(fields: TableFieldMeta[]) {
		this.map = new Map(fields.map(e => [e.name, e]))
	}

	getField(fieldName: TableFieldMeta["name"]): TableFieldMeta {
		const fieldMeta = this.map.get(fieldName)

		if (fieldMeta) {
			return fieldMeta
		}

		throw new Error(`Unknown field: "${fieldName}"`)
	}

	get fields(): TableFieldMeta[] {
		return Array.from(this.map.values())
	}
}
