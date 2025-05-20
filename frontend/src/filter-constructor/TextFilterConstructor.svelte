<script lang="ts">
	export let tableFieldMeta: TableFieldMeta
	export let onAdd: (filter: SingleFilter) => void
	export let choices: IChoice[]


	import Clause from "@/clause/Clause"
	import { CLAUSES_STRICT_COMPARISON, CLAUSES_CONTAINING, CLAUSES_BOUNDARY } from "@/clause/const"
	import FilterConstructor from "@/filter-constructor/FilterConstructor.svelte"
	import type IChoice from "@/choice/IChoice"
	import FormRow from "@/django-admin/FormRow.svelte"
	import type TableFieldMeta from "@/meta/TableFieldMeta"
	import FieldType from "@/meta/FieldType"
	import SingleFilter from "@/filter/SingleFilter"
	import ButtonAdd from "@/filter-constructor/ButtonAdd.svelte"


	function handleAdd(): void {
		onAdd(new SingleFilter(
			enabled,
			clause,
			tableFieldMeta.name,
			{ label: value, value: value },
			FieldType.TEXT,
		))
	}


	const CLAUSES: Clause[] = [...CLAUSES_STRICT_COMPARISON, ...CLAUSES_CONTAINING, ...CLAUSES_BOUNDARY]
	let enabled = false
	let clause: Clause = CLAUSES[0]
	let value = ""
</script>

<style>
	label {
		width: 100%;
	}
</style>

<FilterConstructor bind:enabled={enabled} bind:clause={clause} clauses={CLAUSES} />

<FormRow>
	<label>
		<input type="text" bind:value={value} />
		Значение
	</label>
</FormRow>

<ButtonAdd onClick={handleAdd} />
