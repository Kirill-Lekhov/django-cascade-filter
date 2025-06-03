<script lang="ts">
	export let tableFieldMeta: TableFieldMeta
	export let choices: IChoice[]
	export let clauses: Clause[]
	export let onAdd: (filter: SingleFilter) => void
	export let multiple = true


	import Clause from "@/clause/Clause"
	import FilterConstructor from "@/filter-constructor/FilterConstructor.svelte"
	import ButtonAdd from "@/filter-constructor/ButtonAdd.svelte"
	import type IChoice from "@/choice/IChoice"
	import FormRow from "@/django-admin/FormRow.svelte"
	import SingleFilter from "@/filter/SingleFilter"
	import type TableFieldMeta from "@/meta/TableFieldMeta"
	import { group } from "@/filter/toolkit"
	import { CLAUSES_NULLABLE } from "@/clause/const"


	function handleChange(event: Event): void {
		const target = event.target as HTMLSelectElement

		if (multiple) {
			const newValue: IChoice[] = []

			for (const option of target.selectedOptions) {
				newValue.push(choices[+option.value])
			}

			value = newValue
		} else {
			value = choices[+target.value]
		}
	}

	function handleAdd(): void {
		if (selectElement.reportValidity()) {
			onAdd(new SingleFilter(
				enabled,
				clause,
				tableFieldMeta.name,
				multiple ? group(...(value as IChoice[])) : (value as IChoice),
				tableFieldMeta.type,
			))
		}
	}


	let _clauses: Clause[] = [...clauses, ...(tableFieldMeta.nullable ? CLAUSES_NULLABLE : [])]
	let selectElement: HTMLSelectElement
	let enabled = false
	let clause: Clause = _clauses[0]
	let value: IChoice | IChoice[] = multiple ? [choices[0]] : choices[0]
	let isDisabled: boolean

	$: isDisabled = CLAUSES_NULLABLE.includes(clause)
</script>

<style>
	label {
		width: 100%;
	}
</style>

<FilterConstructor bind:enabled={enabled} bind:clause={clause} clauses={_clauses} />

<FormRow>
	<label>
		<select
			bind:this={selectElement}
			multiple={multiple}
			required
			on:change={handleChange}
			disabled={isDisabled}
			title={isDisabled ? "Значение будет проигнорировано" : ""}
		>
			{#each choices as choice, index (choice.value)}
				<option value={index}>{choice.label}</option>
			{/each}
		</select>
		Значение
	</label>
</FormRow>

<ButtonAdd onClick={handleAdd} />
