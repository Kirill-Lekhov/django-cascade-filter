import Clause from "@/clause/Clause"
import type IFilter from "@/filter/IFilter"
import FilterType from "@/filter/FilterType"


export default class MultiFilter implements IFilter {
	public type = FilterType.MULTI
	public enabled: boolean
	public clause: Clause
	public subfilters: IFilter[]

	constructor(enabled: boolean, clause: Clause, subfilters: IFilter[]) {
		this.enabled = enabled
		this.clause = clause
		this.subfilters = subfilters
	}
}
