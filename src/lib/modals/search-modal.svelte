<script lang="ts">
	import type { Recipe } from '$lib/types';
	import { modalStore } from '@skeletonlabs/skeleton';

	export let recipes: Recipe[];

	// Classes
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

	function onSearch(): void {
		filteredRecipes = recipes.filter(
			(r) => r.title.includes(searchTerm) || r.description.includes(searchTerm)
		);
	}

	function onInputKeyDown(event: KeyboardEvent): void {
		if (['Enter', 'ArrowDown'].includes(event.code)) {
			const queryFirstAnchorElement = elemDocSearch.querySelector('a');
			if (queryFirstAnchorElement) queryFirstAnchorElement.focus();
		}
	}
</script>

<div bind:this={elemDocSearch} class="modal-search {cBase}">
	<!-- Header -->
	<header class="modal-search-header {cHeader}">
		<i class="fa-solid fa-magnifying-glass text-xl ml-4" />
		<input
			class={cSearchInput}
			bind:value={searchTerm}
			type="search"
			placeholder="Search..."
			on:input={onSearch}
			on:keydown={onInputKeyDown}
		/>
	</header>
	<!-- Results -->
	<div class="modal-search-results {cResults}">
		<nav class="list-nav">
			<div class="text-sm font-bold p-4">Recipes:</div>
			<ul>
				<!-- Item -->
				{#each filteredRecipes as recipe}
					<li class="text-lg">
						<!-- prettier-ignore -->
						<a class={cResultAnchor} href="/recipes/{recipe.slug}" on:click={() => { modalStore.close(); }}>
								<div class="flex items-center gap-4">
									{#if recipe.category.toLowerCase() === 'cocktail'}
										<i class="fa-solid fa-martini-glass-citrus" />
									{:else if recipe.category.toLowerCase() === 'food'}
										<i class="fa-solid fa-utensils" />
									{:else}
										<i class="fa-solid fa-kitchen-set" />
									{/if}

									<span class="flex-auto font-bold opacity-75">{recipe.title}</span>
								</div>
							</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<!-- Footer -->
	<footer class="modal-search-footer {cFooter}">
		<div><kbd class="kbd">Esc</kbd> to close</div>
		<div><kbd class="kbd">Tab</kbd> to navigate</div>
		<div><kbd class="kbd">Enter</kbd> to select</div>
	</footer>
</div>
