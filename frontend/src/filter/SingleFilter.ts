import Clause from "@/clause/Clause"
import type IFilter from "@/filter/IFilter"
import FilterType from "@/filter/FilterType"
import type IFilterValue from "@/filter/IFilterValue"
import type FieldType from "@/meta/FieldType"


export default class SingleFilter implements IFilter {
	public type = FilterType.SINGLE
	public enabled: boolean
	public clause: Clause
	public tableField: string
	public value: IFilterValue
	public subtype: FieldType

	constructor(
		enabled: boolean,
		clause: Clause,
		tableField: string,
		value: IFilterValue,
		subtype: FieldType,
	) {
		this.enabled = enabled
		this.clause = clause
		this.tableField = tableField
		this.value = value
		this.subtype = subtype
	}
}
