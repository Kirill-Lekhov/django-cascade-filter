<script lang="ts">
	export let tableMeta: TableMeta


	import { filter, isFilterCreateDialogOpen, newFilterParent } from "@/storage"
	import ButtonAdd from "@/filter-editor/ButtonAdd.svelte"
	import MultiFilter from "@/filter/MultiFilter"
	import SingleFilter from "@/filter/SingleFilter"
	import MultiFilterNode from "@/filter-editor/MultiFilterNode.svelte"
	import SingleFilterNode from "@/filter-editor/SingleFilterNode.svelte"
	import ErrorIndicator from "@/ErrorIndicator.svelte"
	import type TableMeta from "@/meta/TableMeta"


	function handleFilterAdd(): void {
		newFilterParent.set(null)
		isFilterCreateDialogOpen.set(true)
	}

	function handleDelete(): void {
		filter.set(null)
	}
</script>

{#if $filter === null}
	<ButtonAdd onClick={handleFilterAdd} />
{:else if $filter instanceof MultiFilter}
	<MultiFilterNode tableMeta={tableMeta} filter={$filter} onDelete={handleDelete} />
{:else if $filter instanceof SingleFilter}
	<SingleFilterNode tableMeta={tableMeta} filter={$filter} onDelete={handleDelete} />
{:else}
	<ErrorIndicator error="Unknown filter type" />
{/if}
