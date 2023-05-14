<script>
	import { isOsMac } from '$lib/helpers/is-on-mac';
	import { triggerSearchModal } from '$lib/helpers/trigger-search-modal';
</script>

<div class="flex justify-between items-center">
	<a class="unstyled hover:cursor-pointer flex flex-col items-center" href="/">
		<span>
			<i class="fa-solid fa-utensils xs:text-2xl text-xl" />
			<i class="fa-solid fa-martini-glass-citrus xs:text-2xl text-xl" />
		</span>

		<span class="xs:text-4xl text-3xl font-semibold">Resippy</span>
	</a>

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
</div>
