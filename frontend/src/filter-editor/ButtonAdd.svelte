<script lang="ts">
	export let onClick: () => void
</script>

<style>
	input {
		width: 140px;
		height: 25px;
		padding: 2px !important;
	}
</style>

<input type="button" value="+ добавить фильтр" on:click={onClick}>
