<script lang="ts">
	export let isOpen = false
	export let style = ""


	let dialog: HTMLDialogElement


	function handleClose(): void {
		isOpen = false
	}


	$: {
		if (dialog) {
			if (isOpen) {
				dialog.showModal()
			} else {
				dialog.close()
			}
		}
	}
</script>

<style>
	dialog {
		border: none;
	}

	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.4);
	}
</style>

<dialog bind:this={dialog} style={style} on:close={handleClose}>
	<header>
		<slot name="header"></slot>
	</header>
	<main>
		<slot name="main"></slot>
	</main>
	<footer>
		<slot name="footer"></slot>
	</footer>
</dialog>
