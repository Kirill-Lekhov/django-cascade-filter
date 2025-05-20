<script lang="ts">
	export let onAdd: (filter: MultiFilter) => void


	import Clause from "@/clause/Clause"
	import FilterConstructor from "@/filter-constructor/FilterConstructor.svelte"
	import ButtonAdd from "@/filter-constructor/ButtonAdd.svelte"
	import MultiFilter from "@/filter/MultiFilter"


	function handleAdd(): void {
		onAdd(new MultiFilter(enabled, clause, []))
	}


	const CLAUSES: Clause[] = [Clause.AND, Clause.OR]
	let enabled: boolean
	let clause: Clause
</script>

<h2>Множественный фильтр</h2>

<FilterConstructor bind:enabled={enabled} bind:clause={clause} clauses={CLAUSES} />

<ButtonAdd onClick={handleAdd} />
