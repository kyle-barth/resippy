<!-- This is a bug with sveltekit https://github.com/sveltejs/kit/issues/2733 -->
<script lang="ts">
	import { afterNavigate } from '$app/navigation';

	let top: HTMLElement;

	afterNavigate(() => {
		if (top) {
			top.scrollIntoView();
		}
	});
</script>

<span bind:this={top} />
