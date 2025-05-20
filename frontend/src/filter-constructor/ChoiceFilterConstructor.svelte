<script lang="ts">
	export let tableFieldMeta: TableFieldMeta
	export let choices: IChoice[]
	export let onAdd: (filter: SingleFilter) => void


	import { CLAUSES_STRICT_COMPARISON } from "@/clause/const"
	import type IChoice from "@/choice/IChoice"
	import type TableFieldMeta from "@/meta/TableFieldMeta"
	import SingleFilter from "@/filter/SingleFilter"
	import SelectFilterConstructor from "@/filter-constructor/SelectFilterConstructor.svelte"
</script>

<SelectFilterConstructor
	tableFieldMeta={tableFieldMeta}
	choices={choices}
	clauses={[...CLAUSES_STRICT_COMPARISON]}
	onAdd={onAdd}
/>
