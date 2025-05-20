<script lang="ts">
	import { ElementId, VERSION } from "@/const"
	import { loadTableMeta } from "@/meta/load"
	import { loadWidgetData } from "@/widget-data/load"
	import type WidgetData from "@/widget-data/IWidgetData"
	import FilterEditor from "@/filter-editor"
	import FilterCreateDialog from "@/FilterCreateDialog.svelte"
	import { filter } from "@/storage"
	import ErrorIndicator from "@/ErrorIndicator.svelte"
	import { saveFilter } from "@/widget-data/save"


	const tableMeta = loadTableMeta(ElementId.TABLE_META)
	const widgetData: WidgetData = loadWidgetData(ElementId.FILTER_FIELD)
	filter.set(widgetData.filter)
	filter.subscribe((value) => {
		saveFilter(value, ElementId.FILTER_FIELD)
	})
</script>

{#if widgetData.filterEditorVersion > VERSION}
	<ErrorIndicator error="Version of filter is greater than editor version" />
{:else}
	<FilterEditor tableMeta={tableMeta} />
	<FilterCreateDialog tableMeta={tableMeta} />
{/if}
