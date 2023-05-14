<script lang="ts">
	import CategoryIcon from '$lib/components/category-icon/category-icon.svelte';
	import { searchFilters } from '$lib/stores/search-filters';
	import type { Recipe, SearchFilter } from '$lib/types';
	import { focusTrap, modalStore } from '@skeletonlabs/skeleton';
	import { groupRecipesByCategory } from '../../../helpers/group-recipes-by-category';
	import Filters from './filters.svelte';

	export let recipes: Recipe[];

	const groupedRecipesByCategory = groupRecipesByCategory(recipes);

	const cBase =
		'card bg-surface-100/60 dark:bg-surface-500/30 backdrop-blur-lg overflow-hidden w-full max-w-[800px] shadow-xl mt-8 mb-auto';
	const cHeader = 'bg-surface-300-600-token flex items-center';
	const cSearchInput =
		'bg-transparent border-0 ring-0 focus:ring-0 w-full p-4 text-lg focus:outline-0';
	const cResults = 'overflow-x-auto max-h-[480px] hide-scrollbar';
	const cResultAnchor =
		'!rounded-none justify-between hover:variant-soft focus:!variant-filled-primary outline-0';
	const cFooter =
		'hidden md:flex items-center gap-2 bg-surface-300-600-token p-4 text-xs font-bold';

	let searchTerm = '';
	let filteredRecipes = recipes;

	let elemDocSearch: HTMLElement;

	function onSearch(searchFilters: SearchFilter): void {
		const omitFilters: (keyof SearchFilter)[] = Object.keys(searchFilters)
			.filter((key) => searchFilters[key as keyof SearchFilter])
			.map((key) => key as keyof SearchFilter);

		filteredRecipes = recipes.filter((recipe) => {
			const filteredRecipe = omitFilters.reduce((acc, key) => acc + recipe[key], '');
			return filteredRecipe.toLowerCase().includes(searchTerm.toLowerCase());
		});
	}

	function onInputKeyDown(event: KeyboardEvent): void {
		if (['Enter', 'ArrowDown'].includes(event.code)) {
			const queryFirstAnchorElement = elemDocSearch.querySelector('a');
			if (queryFirstAnchorElement) queryFirstAnchorElement.focus();
		}
	}
</script>

<!-- There is a bug where it can still tab outside of this ¯\_(ツ)_/¯ -->
<div use:focusTrap={true} bind:this={elemDocSearch} class="modal-search {cBase}">
	<header class="modal-search-header {cHeader}">
		<i class="fa-solid fa-magnifying-glass text-xl ml-4" />
		<input
			class={cSearchInput}
			bind:value={searchTerm}
			type="search"
			placeholder="Search..."
			on:input={() => onSearch($searchFilters)}
			on:keydown={onInputKeyDown}
		/>
	</header>

	<div class="modal-search-results {cResults}">
		<Filters onClick={() => onSearch($searchFilters)} />

		<nav class="list-nav text-lg">
			{#if filteredRecipes.length === 0}
				<p class="p-4">No results found.</p>
			{/if}

			{#each groupedRecipesByCategory as recipe}
				{#if filteredRecipes
					.map((r) => r.category)
					.includes(recipe.category) && recipe.recipes.length > 0}
					<p class="text-sm font-bold p-4">{recipe.category}:</p>
				{/if}

				<ul>
					{#each filteredRecipes as filteredRecipe}
						{#if filteredRecipe.category === recipe.category}
							<li>
								<a
									class={cResultAnchor}
									href="/recipes/{filteredRecipe.slug}"
									on:click={() => {
										modalStore.close();
									}}
								>
									<div class="flex items-center gap-4">
										<CategoryIcon category={filteredRecipe.category} />
										<span class="font-semibold opacity-75 whitespace-pre-wrap"
											>{filteredRecipe.title}</span
										>
									</div>
								</a>
							</li>
						{/if}
					{/each}
				</ul>
			{/each}
		</nav>
	</div>

	<footer class="modal-search-footer {cFooter}">
		<div><kbd class="kbd">Esc</kbd> to close</div>
		<div><kbd class="kbd">Tab</kbd> to navigate</div>
		<div><kbd class="kbd">Enter</kbd> to select</div>
	</footer>
</div>
