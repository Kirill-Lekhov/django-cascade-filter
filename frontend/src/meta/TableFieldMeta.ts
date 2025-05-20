import type IChoice from "@/choice/IChoice"
import type FieldType from "@/meta/FieldType"


export default interface TableFieldMeta {
	label: string
	name: string
	nullable: boolean
	readonly type: FieldType
	readonly choices?: IChoice[]
}
