<script lang="ts">
	export let tableFieldMeta: TableFieldMeta
	export let onAdd: (filter: SingleFilter) => void
	export let choices: IChoice[]


	import Clause from "@/clause/Clause"
	import { CLAUSES_STRICT_COMPARISON, CLAUSES_NULLABLE } from "@/clause/const"
	import FilterConstructor from "@/filter-constructor/FilterConstructor.svelte"
	import type IChoice from "@/choice/IChoice"
	import FormRow from "@/django-admin/FormRow.svelte"
	import type TableFieldMeta from "@/meta/TableFieldMeta"
	import FieldType from "@/meta/FieldType"
	import SingleFilter from "@/filter/SingleFilter"
	import ButtonAdd from "@/filter-constructor/ButtonAdd.svelte"


	function handleAdd(): void {
		console.debug(inputElement.value)

		if (inputElement.reportValidity()) {
			onAdd(new SingleFilter(
				enabled,
				clause,
				tableFieldMeta.name,
				{ label: value || DEFAULT_VALUE, value: value || DEFAULT_VALUE },
				FieldType.UUID,
			))
		}
	}


	const CLAUSES: Clause[] = [...CLAUSES_STRICT_COMPARISON, ...(tableFieldMeta.nullable ? CLAUSES_NULLABLE : [])]
	const DEFAULT_VALUE = "00000000-0000-0000-0000-000000000000"
	let enabled = false
	let clause: Clause = CLAUSES[0]
	let value = ""
	let isDisabled: boolean
	let inputElement: HTMLInputElement

	$: isDisabled = CLAUSES_NULLABLE.includes(clause)
</script>

<style>
	label {
		width: 100%;
	}

	input {
		width: 20em;
	}
</style>

<FilterConstructor bind:enabled={enabled} bind:clause={clause} clauses={CLAUSES} />

<FormRow>
	<label>
		<!-- Any UUID, without version check and etc. -->
		<input
			bind:this={inputElement}
			type="text"
			bind:value={value}
			disabled={isDisabled}
			title={isDisabled ? "Значение будет проигнорировано" : ""}
			pattern="[\da-fA-F]{"{8}"}-[\da-fA-F]{"{4}"}-[\da-fA-F]{"{4}"}-[\da-fA-F]{"{4}"}-[\da-fA-F]{"{12}"}"
			placeholder="00000000-0000-0000-0000-000000000000"
			required
		/>
		Значение
	</label>
</FormRow>

<ButtonAdd onClick={handleAdd} />
