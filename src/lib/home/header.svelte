<script>
	import { triggerSearchModal } from '../../helpers/trigger-search-modal';
</script>

<div class="flex justify-between">
	<a class="flex items-center gap-4 " href="/">
		<span>
			<i class="fa-solid fa-utensils text-4xl" />
			<i class="fa-solid fa-martini-glass-citrus text-4xl" />
		</span>
		<h1>Resippy</h1>
	</a>

	<button
		on:click={triggerSearchModal}
		class="flex justify-between items-center bg-secondary-900 hover:bg-secondary-800 rounded-lg w-52 text-left px-5 shadow-md border-2 border-primary-50"
	>
		<div class="flex items-center gap-4">
			<i class="fa-solid fa-magnifying-glass" />
			<span class="flex-auto font-bold opacity-75">Search...</span>
		</div>

		<span class="text-secondary-400">⌘K</span>
	</button>
</div>
