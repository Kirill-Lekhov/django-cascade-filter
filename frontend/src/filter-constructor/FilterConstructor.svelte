<script lang="ts">
	export let enabled: boolean = false
	export let clause: Clause
	export let clauses: Clause[]


	import Clause from "@/clause/Clause"
	import clauseLabelMap from "@/clause/clauseLabelMap"
	import FormRow from "@/django-admin/FormRow.svelte"
</script>

<style>
	label {
		width: 100%;
	}
</style>

<FormRow>
	<label class="vCheckboxLabel">
		<input bind:checked={enabled} type="checkbox">
		Включен
	</label>
</FormRow>

<FormRow>
	<label>
		<select bind:value={clause}>
			{#each clauses as clause (clause)}
				<option value={clause}>{clauseLabelMap.get(clause) ?? clause}</option>
			{/each}
		</select>
		Выражение
	</label>
</FormRow>
