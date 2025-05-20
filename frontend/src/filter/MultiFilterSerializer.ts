import MultiFilter from "@/filter/MultiFilter"
import FilterType from "@/filter/FilterType"
import Clause from "@/clause/Clause"

import { ObjectSerializer } from "json-twdc"
import { AnyField, ArrayField, BooleanField, EnumField } from "json-twdc/field"


export default class MultiFilterSerializer extends ObjectSerializer<MultiFilter, typeof MultiFilter> {
	fields = {
		type: EnumField(FilterType),
		enabled: BooleanField(),
		clause: EnumField(Clause),
		subfilters: ArrayField(AnyField()),
	}

	// @ts-expect-error
	makeObject(type: FilterType, enabled: boolean, clause: Clause, subfilters: any[]): MultiFilter {
		return new MultiFilter(enabled, clause, subfilters)
	}
}
