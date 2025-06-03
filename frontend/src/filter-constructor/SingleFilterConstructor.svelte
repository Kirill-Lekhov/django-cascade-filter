<script lang="ts">
	export let tableMeta: TableMeta
	export let onAdd: (filter: SingleFilter) => void


	import type IChoice from "@/choice/IChoice"
	import type TableMeta from "@/meta/TableMeta"
	import type TableFieldMeta from "@/meta/TableFieldMeta"
	import FieldType from "@/meta/FieldType"
	import ArrayFilterConstructor from "@/filter-constructor/ArrayFilterConstructor.svelte"
	import BooleanFilterConstructor from "@/filter-constructor/BooleanFilterConstructor.svelte"
	import ChoiceFilterConstructor from "@/filter-constructor/ChoiceFilterConstructor.svelte"
	import DateFilterConstructor from "@/filter-constructor/DateFilterConstructor.svelte"
	import NumericFilterConstructor from "@/filter-constructor/NumericFilterConstructor.svelte"
	import TextFilterConstructor from "@/filter-constructor/TextFilterConstructor.svelte"
	import UUIDFilterConstructor from "@/filter-constructor/UUIDFilterConstructor.svelte"
	import ErrorIndicator from "@/ErrorIndicator.svelte"
	import type SingleFilter from "@/filter/SingleFilter"

	import type { Component } from "svelte"


	type ConstructorComponentType = Component<{
		tableFieldMeta: TableFieldMeta,
		choices: IChoice[],
		onAdd: (filter: SingleFilter) => void,
	}>
	const FILTER_CONSTRUCTORS: Map<FieldType, ConstructorComponentType> = new Map([
		[FieldType.ARRAY, ArrayFilterConstructor],
		[FieldType.CHOICE, ChoiceFilterConstructor],
		[FieldType.BOOLEAN, BooleanFilterConstructor],
		[FieldType.DATE, DateFilterConstructor],
		[FieldType.NUMERIC, NumericFilterConstructor],
		[FieldType.TEXT, TextFilterConstructor],
		[FieldType.UUID, UUIDFilterConstructor],
	])
	let currentTableFieldMeta: TableFieldMeta = tableMeta.fields[0]
	let ConstructorComponent: ConstructorComponentType | null = null


	$: {
		const NewConstructorComponent = FILTER_CONSTRUCTORS.get(currentTableFieldMeta.type) ?? null
		ConstructorComponent = NewConstructorComponent
	}
</script>

<style>
	label {
		width: 100%;
	}
</style>

<h2>Одиночный фильтр</h2>

<div class="form-row">
	<div>
		<label>
			<select bind:value={currentTableFieldMeta}>
				{#each tableMeta.fields as tableFieldMeta (tableFieldMeta.name)}
					<option value={tableFieldMeta}>{tableFieldMeta.label}</option>
				{/each}
			</select>
			Поле таблицы
		</label>
	</div>
</div>

{#key ConstructorComponent}
	{#if ConstructorComponent}
		<ConstructorComponent
			tableFieldMeta={currentTableFieldMeta}
			choices={currentTableFieldMeta.choices ?? []}
			onAdd={onAdd}
		/>
	{:else}
		<ErrorIndicator error="Столбец этого типа не поддерживается" />
	{/if}
{/key}
