<script lang="ts">
	export let category: string;
	export let search: (string: string) => void;

	let searchTerm: string = '';
</script>

<form class="sm:w-72 w-[80%]">
	<label for="default-search" class="mb-2 text-sm font-medium sr-only dark:text-white">Search</label
	>
	<div class="relative">
		<div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
			<i class="fa-solid fa-magnifying-glass" />
		</div>
		<input
			type="search"
			id="default-search"
			class="w-full pl-12 h-12 variant-ghost-secondary rounded-full placeholder:text-white"
			placeholder="Search {category}..."
			bind:value={searchTerm}
			on:input={(e) => search(searchTerm)}
		/>
	</div>
</form>
