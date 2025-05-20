<script lang="ts">
	export let tableFieldMeta: TableFieldMeta
	export let choices: IChoice[]
	export let onAdd: (filter: SingleFilter) => void


	import { CLAUSES_CONTAINING } from "@/clause/const"
	import type IChoice from "@/choice/IChoice"
	import SingleFilter from "@/filter/SingleFilter"
	import type TableFieldMeta from "@/meta/TableFieldMeta"
	import SelectFilterConstructor from "@/filter-constructor/SelectFilterConstructor.svelte"
</script>

<SelectFilterConstructor
	tableFieldMeta={tableFieldMeta}
	choices={choices}
	onAdd={onAdd}
	clauses={[...CLAUSES_CONTAINING]}
/>
