<script>
	import { isOsMac } from '$lib/helpers/is-on-mac';
	import { triggerSearchModal } from '$lib/helpers/trigger-search-modal';
</script>

<button
	on:click={triggerSearchModal}
	class="flex justify-between items-center sm:w-52 w-40 h-12 btn variant-ghost-secondary"
>
	<div class="flex items-center gap-2">
		<i class="fa-solid fa-magnifying-glass" />
		<span>Search...</span>
	</div>

	<span class="hidden sm:block">{isOsMac() ? '⌘' : 'Ctrl'}+K</span>
</button>
