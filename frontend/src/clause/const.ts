import Clause from "@/clause/Clause"


export const CLAUSES_STRICT_COMPARISON = [Clause.EQUAL, Clause.NOT_EQUAL]
export const CLAUSES_NON_STRICT_COMPARISON = [
	Clause.GREATER_THAN, Clause.LESS_THAN, Clause.GREATER_THAN_OR_EQUAL, Clause.LESS_THAN_OR_EQUAL,
]
export const CLAUSES_CONTAINING = [Clause.CONTAINS, Clause.NOT_CONTAINS]
export const CLAUSES_ACCORDANCE = [Clause.IS, Clause.IS_NOT]
export const CLAUSES_BOUNDARY = [Clause.STARTS_WITH, Clause.ENDS_WITH]
export const CLAUSES_NULLABLE = [Clause.IS_NULL, Clause.IS_NOT_NULL]
