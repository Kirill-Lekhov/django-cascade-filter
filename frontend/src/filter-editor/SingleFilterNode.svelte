<script lang="ts">
	export let tableMeta: TableMeta
	export let filter: SingleFilter
	export let onDelete: () => void


	import type SingleFilter from "@/filter/SingleFilter"
	import { filter as filterStorage } from "@/storage"
	import clauseLabelMap from "@/clause/clauseLabelMap"
	import type TableMeta from "@/meta/TableMeta"
	import { CLAUSES_NULLABLE } from "@/clause/const"


	function handleEnabledChange(event: Event): void {
		const target = event.target as HTMLInputElement
		filter.enabled = target.checked
		filterStorage.update((value) => value)
	}
</script>

<style>
	.single-filter {
		max-width: 600px;
		border: solid 1px rgba(124, 124, 124, 0.3);
		border-radius: 10px;
		display: grid;
		grid-template-columns: 1fr 30px;
		gap: 5px;
	}

	.single-filter__main-content {
		padding: 5px;
		display: grid;
		grid-template-columns: min-content max-content max-content 1fr;
		gap: 5px;
	}

	.btn-delete {
		border: none;
		border-radius: 0 10px 10px 0;
		background-color: rgba(255, 0, 0, 0.7);
		color: white;
		font-size: 15px;
	}

	.btn-delete:hover {
		cursor: pointer;
		color: black;
	}

	.disabled {
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>

<div class="single-filter" class:disabled={!filter.enabled}>
	<div class="single-filter__main-content">
		<input type="checkbox" on:change={handleEnabledChange} checked={filter.enabled}>
		<div>{tableMeta.getField(filter.tableField).label}</div>
		<div>{clauseLabelMap.get(filter.clause) ?? filter.clause}</div>
		<div>{CLAUSES_NULLABLE.includes(filter.clause) ? "" : filter.value.label}</div>
	</div>

	<button class="btn-delete" type="button" on:click={onDelete}>&nbsp;×&nbsp;</button>
</div>
