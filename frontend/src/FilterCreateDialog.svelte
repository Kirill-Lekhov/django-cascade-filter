<script lang="ts">
	export let tableMeta: TableMeta


	import Dialog from "@/generic/Dialog.svelte"
	import type TableMeta from "@/meta/TableMeta"
	import SingleFilterConstructor from "@/filter-constructor/SingleFilterConstructor.svelte"
	import MultiFilterConstructor from "@/filter-constructor/MultiFilterConstructor.svelte"
	import { filter, newFilterParent, isFilterCreateDialogOpen } from "@/storage"
	import type IFilter from "@/filter/IFilter"

	import { onMount } from "svelte"
	import { get } from "svelte/store"


	function handleFilterAdd(newFilter: IFilter): void {
		const parent = get(newFilterParent)

		if (parent) {
			parent.subfilters.push(newFilter)
			filter.update((value) => value)
		} else {
			filter.set(newFilter)
		}

		isFilterCreateDialogOpen.set(false)
	}

	function handleDialogClose(): void {
		isFilterCreateDialogOpen.set(false)
	}


	let isOpen = false


	$: !isOpen ? isFilterCreateDialogOpen.set(isOpen) : undefined


	onMount(() => {
		isFilterCreateDialogOpen.subscribe((value) => {
			isOpen = value
		})
	})
</script>

<style>
	.dialog__header {
		padding: 2px 16px;
		background-color: var(--primary, #79aec8);
		color: white;
	}

	.dialog__body {
		padding: 10px;
		background-color: var(--body-bg, white);
	}

	.btn-close {
		color: white;
		float: right;
		font-size: 28px;
		font-weight: bold;
		background: transparent;
		border: none;
	}

	.btn-close:hover {
		cursor: pointer;
		color: black;
	}

	.btn-close:focus {
		outline: none;
	}

	hr {
		margin-block: 1em;
	}
</style>

<Dialog
	bind:isOpen={isOpen}
	style="background-color: #fefefe; margin: 5% auto; border: 1px solid #888; width: 40%; padding: 0;"
>
	<div class="dialog__header" slot="header">
		<button class="btn-close" type="button" on:click={handleDialogClose}>×</button>
		<h2>Добавить фильтр</h2>
	</div>
	<div class="dialog__body" slot="main">
		<SingleFilterConstructor tableMeta={tableMeta} onAdd={handleFilterAdd} />
		<hr />
		<MultiFilterConstructor onAdd={handleFilterAdd} />
	</div>
</Dialog>
