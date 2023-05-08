<script>
	import { goto } from '$app/navigation';
	import { triggerSearchModal } from '../../helpers/trigger-search-modal';
</script>

<div class="flex justify-between gap-10 items-center">
	<!-- TODO: Make this an <a> tag then fix default link styling -->
	<span
		tabindex="0"
		class="hover:cursor-pointer flex flex-col items-center"
		role="link"
		on:keydown={(e) => (e.key === 'Enter' ? goto('/') : null)}
		on:click={() => goto('/')}
	>
		<span>
			<i class="fa-solid fa-utensils xs:text-2xl text-xl" />
			<i class="fa-solid fa-martini-glass-citrus xs:text-2xl text-xl" />
		</span>

		<span class="xs:text-4xl text-3xl font-semibold">Resippy</span>
	</span>

	<button
		on:click={triggerSearchModal}
		class="flex justify-between items-center bg-secondary-900 hover:bg-secondary-800 rounded-lg w-52 text-left px-5 shadow-md border-2 border-primary-50 h-12"
	>
		<div class="flex items-center gap-2">
			<i class="fa-solid fa-magnifying-glass" />
			<span class="flex-auto font-bold">Search...</span>
		</div>

		<span class="text-secondary-400">⌘K</span>
	</button>
</div>
