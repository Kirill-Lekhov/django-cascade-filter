<script lang="ts">
	export let tableMeta: TableMeta
	export let filter: MultiFilter
	export let onDelete: () => void


	import MultiFilter from "@/filter/MultiFilter"
	import SingleFilter from "@/filter/SingleFilter"
	import SingleFilterNode from "@/filter-editor/SingleFilterNode.svelte"
	import MultiFilterNode from "@/filter-editor/MultiFilterNode.svelte"
	import ButtonAdd from "@/filter-editor/ButtonAdd.svelte"
	import { filter as filterStorage, isFilterCreateDialogOpen, newFilterParent } from "@/storage"
	import clauseLabelMap from "@/clause/clauseLabelMap"
	import type TableMeta from "@/meta/TableMeta"


	function handleEnabledChange(event: Event): void {
		const target = event.target as HTMLInputElement
		filter.enabled = target.checked
		filterStorage.update((value) => value)
	}

	function handleAdd(): void {
		newFilterParent.set(filter)
		isFilterCreateDialogOpen.set(true)
		filterStorage.update((value) => value)
	}

	function handleDelete(index: number): void {
		filter.subfilters = filter.subfilters.filter((_, idx) => idx !== index)
		filterStorage.update((value) => value)
	}
</script>

<style>
	.multi-filter {
		display: flex;
		margin-bottom: 10px;
		padding: 5px;
	}

	.multi-filter__head {
		align-self: center;
		margin-right: 10px;
		min-width: 70px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.multi-filter__head > div {
		margin-left: 5px;
	}

	.btn-delete {
		background-color: rgba(255, 0, 0, 0.7);
		border: none;
		color: white;
		border-radius: 5px;
		margin-left: 5px;
		font-size: 15px;
		padding-inline: 0.1em;
	}

	.btn-delete:hover {
		cursor: pointer;
		color: black;
	}

	.multi-filter__body {
		border-left: 1px solid #79aec8;
		border-radius: 10px;
		padding: 10px;
	}

	.disabled {
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}
</style>

<div class="multi-filter" class:disabled={!filter.enabled}>
	<div class="multi-filter__head">
		<input type="checkbox" on:change={handleEnabledChange} checked={filter.enabled}>
		<div>{clauseLabelMap.get(filter.clause) ?? filter.clause}</div>
		<button class="btn-delete" type="button" on:click={onDelete}>&nbsp;×&nbsp;</button>
	</div>
	<div class="multi-filter__body">
		{#each filter.subfilters as subfilter, index}
			{#if subfilter instanceof MultiFilter}
				<MultiFilterNode tableMeta={tableMeta} filter={subfilter} onDelete={() => handleDelete(index)} />
			{:else if subfilter instanceof SingleFilter}
				<SingleFilterNode tableMeta={tableMeta} filter={subfilter} onDelete={() => handleDelete(index)} />
			{/if}
		{/each}

		<ButtonAdd onClick={handleAdd} />
	</div>
</div>
