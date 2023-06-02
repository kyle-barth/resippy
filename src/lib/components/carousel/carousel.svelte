<script lang="ts">
	import CategoryIcon from '$lib/components/category-icon/category-icon.svelte';
	import RecipeCard from '$lib/components/recipe-card/recipe-card.svelte';
	import { groupRecipesByCategory } from '$lib/helpers/group-recipes-by-category';
	import { formSpacing, spacing } from '$lib/helpers/page-spacing';
	import type { RecipeData } from '$lib/types';

	const li = 'w-64 grid';

	export let recipes: Omit<RecipeData, 'description'>[];
	const groupedRecipes = groupRecipesByCategory(recipes);
</script>

<section class="{spacing} flex flex-col">
	{#each groupedRecipes as groupedRecipe}
		<hr />
		<section class="{spacing} flex sm:flex-row flex-col">
			<div class="w-20 flex flex-col items-center justify-center">
				<CategoryIcon category={groupedRecipe.category} />
				<div class="sm:w-64 flex items-center justify-center">{groupedRecipe.category}</div>
			</div>

			<div class="max-w-7xl overflow-auto flex">
				<ul class="{spacing} flex flex-row flex-nowrap p-2 pb-4">
					{#each groupedRecipe.recipes.slice(0, 3) as recipe}
						<li class={li}>
							<RecipeCard {...recipe} />
						</li>
					{/each}
					<li class="w-44 grid items-center justify-center">
						<a
							class="w-40 h-10 unstyled hover:scale-105 transition-all"
							href="/category/{groupedRecipe.category.toLowerCase()}"
						>
							<span class="{formSpacing} h-full flex items-center justify-center">
								<h3>View All</h3>
								<i class="fa-solid fa-arrow-right" />
							</span>
						</a>
					</li>
				</ul>
			</div>
		</section>
	{/each}
</section>
