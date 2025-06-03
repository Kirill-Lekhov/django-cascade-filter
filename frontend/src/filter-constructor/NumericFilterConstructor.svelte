<script lang="ts">
	export let tableFieldMeta: TableFieldMeta
	export let onAdd: (filter: SingleFilter) => void
	export let choices: IChoice[]


	import Clause from "@/clause/Clause"
	import { CLAUSES_STRICT_COMPARISON, CLAUSES_NON_STRICT_COMPARISON, CLAUSES_NULLABLE } from "@/clause/const"
	import FilterConstructor from "@/filter-constructor/FilterConstructor.svelte"
	import type IChoice from "@/choice/IChoice"
	import FormRow from "@/django-admin/FormRow.svelte"
	import type TableFieldMeta from "@/meta/TableFieldMeta"
	import FieldType from "@/meta/FieldType"
	import SingleFilter from "@/filter/SingleFilter"
	import ButtonAdd from "@/filter-constructor/ButtonAdd.svelte"


	function handleAdd(): void {
		if (inputElement.reportValidity()) {
			onAdd(new SingleFilter(
				enabled,
				clause,
				tableFieldMeta.name,
				{ label: "" + (value ?? DEFAULT_VALUE), value: value ?? DEFAULT_VALUE },
				FieldType.NUMERIC,
			))
		}
	}


	const CLAUSES: Clause[] = [
		...CLAUSES_STRICT_COMPARISON,
		...CLAUSES_NON_STRICT_COMPARISON,
		...(tableFieldMeta.nullable ? CLAUSES_NULLABLE : []),
	]
	const DEFAULT_VALUE = 0
	let inputElement: HTMLInputElement
	let enabled = false
	let clause: Clause = CLAUSES[0]
	let value: number
	let isDisabled: boolean

	$: isDisabled = CLAUSES_NULLABLE.includes(clause)
</script>

<style>
	label {
		width: 100%;
	}
</style>

<FilterConstructor bind:enabled={enabled} bind:clause={clause} clauses={CLAUSES} />

<FormRow>
	<label>
		<input
			bind:this={inputElement}
			type="number"
			required bind:value={value}
			disabled={isDisabled}
			title={isDisabled ? "Значение будет проигнорировано" : ""}
		/>
		Значение
	</label>
</FormRow>

<ButtonAdd onClick={handleAdd} />
