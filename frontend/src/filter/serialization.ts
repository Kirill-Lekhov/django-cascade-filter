import type IFilter from "@/filter/IFilter"
import type SingleFilter from "@/filter/SingleFilter"
import type MultiFilter from "@/filter/MultiFilter"
import FilterType from "@/filter/FilterType"
import SingleFilterSerializer from "@/filter/SingleFilterSerializer"
import MultiFilterSerializer from "@/filter/MultiFilterSerializer"


export function deserialize(filter: IFilter): SingleFilter | MultiFilter {
	switch (filter.type) {
		case FilterType.SINGLE:
			const serializer = new SingleFilterSerializer()
			return serializer.deserialize(filter)
		case FilterType.MULTI:
			const multiFilterSerializer = new MultiFilterSerializer()
			const serializedFilter = multiFilterSerializer.deserialize(filter)
			serializedFilter.subfilters = serializedFilter.subfilters.map(deserialize)
			return serializedFilter
		default:
			throw new Error(`Unknown filter type: ${filter.type}`)
	}
}
