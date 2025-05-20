import FilterType from "@/filter/FilterType"
import SingleFilter from "@/filter/SingleFilter"
import IFilterValueSerializer from "@/filter/IFilterValueSerializer"
import FieldType from "@/meta/FieldType"
import Clause from "@/clause/Clause"


import { BooleanField, EnumField, ObjectField, ObjectSerializer, StringField } from "json-twdc"


export default class SingleFilterSerializer extends ObjectSerializer<SingleFilter, typeof SingleFilter> {
	fields = {
		type: EnumField(FilterType),
		enabled: BooleanField(),
		clause: EnumField(Clause),
		tableField: StringField(),
		value: ObjectField(new IFilterValueSerializer()),
		subtype: EnumField(FieldType),
	}

	// @ts-expect-error
	makeObject(
		type: FilterType,
		enabled: boolean,
		clause: Clause,
		tableField: string,
		value: any,
		subtype: FieldType,
	): SingleFilter {
		return new SingleFilter(enabled, clause, tableField, value, subtype)
	}
}
