<script lang="ts">
	export let tableFieldMeta: TableFieldMeta
	export let choices: IChoice[]
	export let onAdd: (filter: SingleFilter) => void


	import { CLAUSES_ACCORDANCE } from "@/clause/const"
	import type IChoice from "@/choice/IChoice"
	import type TableFieldMeta from "@/meta/TableFieldMeta"
	import SingleFilter from "@/filter/SingleFilter"
	import SelectFilterConstructor from "@/filter-constructor/SelectFilterConstructor.svelte"


	choices = [{ value: true, label: "Истина" }, { value: false, label: "Ложь" }]
</script>

<SelectFilterConstructor
	tableFieldMeta={tableFieldMeta}
	choices={choices}
	clauses={[...CLAUSES_ACCORDANCE]}
	onAdd={onAdd}
	multiple={false}
/>
