<script lang="ts">
	export let error: Error | string


	let message: string = error instanceof Error ? String(error) : error
</script>

<style>
	span {
		color: red;
	}
</style>

<span>{message}</span>
