<script lang="ts">
	import RecipeCard from '$lib/components/recipe-card/recipe-card.svelte';
	import { omit } from '$lib/helpers/omit.js';
	import { spacing } from '$lib/helpers/page-spacing.js';
	import _ from 'lodash';

	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	export let data;
	const title =
		data.slug && /^[a-zA-Z]+$/.test(data.slug) ? capitalize(data.slug) : new Error('404');

	const recipes = data.recipes
		.filter((recipe) => {
			return recipe.category.toLowerCase() === data.slug;
		})
		.map((recipe) => omit(recipe, 'description'));
</script>

<section class="{spacing} flex flex-col justify-center items-center">
	<h2>{title}:</h2>

	<ul class="grid grid-cols-1 gap-4">
		<li class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{#each recipes as recipe}
				<RecipeCard {...recipe} />
			{/each}
		</li>
	</ul>
</section>
