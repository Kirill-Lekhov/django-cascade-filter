<script lang="ts">
	export let onClick: () => void
</script>

<style>
	input {
		width: 140px;
		height: 25px;
		padding: 2px !important;
		margin-top: 1em;
	}
</style>

<input type="button" value="Добавить фильтр" on:click={onClick}>
