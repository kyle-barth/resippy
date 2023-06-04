<script lang="ts">
	import { groupRecipesByCategory } from '$lib/helpers/group-recipes-by-category';
	import { spacing } from '$lib/helpers/page-spacing';
	import type { RecipeData } from '$lib/types';
	import Carousel from '../carousel/carousel.svelte';

	export let recipes: Omit<RecipeData, 'description'>[];
	const groupedRecipes = groupRecipesByCategory(recipes);
</script>

<section class="{spacing} flex flex-col">
	{#each groupedRecipes as groupedRecipe}
		<Carousel {groupedRecipe} />
	{/each}
</section>
