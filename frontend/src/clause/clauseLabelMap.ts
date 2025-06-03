import Clause from "@/clause/Clause"


const clauseLabelMap: Map<Clause, string> = new Map([
	[Clause.EQUAL, "="],
	[Clause.NOT_EQUAL, "≠"],
	[Clause.GREATER_THAN, ">"],
	[Clause.LESS_THAN, "<"],
	[Clause.GREATER_THAN_OR_EQUAL, "≥"],
	[Clause.LESS_THAN_OR_EQUAL, "≤"],
	[Clause.CONTAINS, "Содержит"],
	[Clause.NOT_CONTAINS, "Не содержит"],
	[Clause.IS, "Является"],
	[Clause.IS_NOT, "Не является"],
	[Clause.STARTS_WITH, "Начинается на"],
	[Clause.ENDS_WITH, "Заканчивается на"],
	[Clause.AND, "И"],
	[Clause.OR, "ИЛИ"],
	[Clause.IS_NULL, "Является NULL"],
	[Clause.IS_NOT_NULL, "Не является NULL"],
])

export default clauseLabelMap
