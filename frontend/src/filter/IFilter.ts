import Clause from "@/clause/Clause"
import type FilterType from "@/filter/FilterType"


export default interface IFilter {
	type: FilterType
	clause: Clause
	enabled: boolean
}
