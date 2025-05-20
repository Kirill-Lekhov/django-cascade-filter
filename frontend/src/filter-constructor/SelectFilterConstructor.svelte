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
				multiple ? group(...value) : value,
				tableFieldMeta.type,
			))
		}
	}


	let selectElement: HTMLSelectElement
	let enabled = false
	let clause: Clause = clauses[0]
	let value: any = multiple ? [choices[0]] : choices[0]
</script>

<style>
	label {
		width: 100%;
	}
</style>

<FilterConstructor bind:enabled={enabled} bind:clause={clause} clauses={clauses} />

<FormRow>
	<label>
		<select bind:this={selectElement} multiple={multiple} required on:change={handleChange}>
			{#each choices as choice, index (choice.value)}
				<option value={index}>{choice.label}</option>
			{/each}
		</select>
		Значение
	</label>
</FormRow>

<ButtonAdd onClick={handleAdd} />
