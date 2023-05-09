<script>
	import { triggerSearchModal } from '../../helpers/trigger-search-modal';
</script>

<div class="flex justify-between gap-10 items-center">
	<a class="unstyled hover:cursor-pointer flex flex-col items-center" href="/">
		<span>
			<i class="fa-solid fa-utensils xs:text-2xl text-xl" />
			<i class="fa-solid fa-martini-glass-citrus xs:text-2xl text-xl" />
		</span>

		<span class="xs:text-4xl text-3xl font-semibold">Resippy</span>
	</a>

	<button
		on:click={triggerSearchModal}
		class="flex justify-between items-center w-52 h-12 btn variant-filled-tertiary"
	>
		<!-- class="flex justify-between items-center bg-tertiary-500 hover:bg-tertiary-400 rounded-lg w-52 text-left px-5 shadow-md border-2 border-primary-50 h-12" -->
		<div class="flex items-center gap-2">
			<i class="fa-solid fa-magnifying-glass" />
			<span>Search...</span>
		</div>

		<span>⌘K</span>
	</button>
</div>
