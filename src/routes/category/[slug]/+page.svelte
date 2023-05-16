<script lang="ts">
	import RecipeCard from '$lib/components/recipe-card/recipe-card.svelte';
	import SearchInput from '$lib/components/search-input/search-input.svelte';
	import { omit } from '$lib/helpers/omit.js';
	import { formSpacing, spacing } from '$lib/helpers/page-spacing.js';

	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	export let data;
	const title = data.slug && /^[a-zA-Z]+$/.test(data.slug) ? capitalize(data.slug) : 'Recipes';

	let recipes = data.recipes
		.filter((recipe) => {
			return recipe.category.toLowerCase() === data.slug;
		})
		.map((recipe) => omit(recipe, 'description'));

	function search(string: string) {
		recipes = data.recipes
			.filter((recipe) => recipe.category.toLowerCase() === data.slug)
			.filter((recipe) => recipe.title.toLowerCase().includes(string.toLowerCase()))
			.map((recipe) => omit(recipe, 'description'));
	}
</script>

<section class="{spacing} flex flex-col justify-center items-center">
	<header class="{formSpacing} flex flex-col justify-center items-center w-full">
		<span class="flex gap-2 items-center justify-center">
			<a href="/" class="unstyled text-xl text-white underline font-bold">Home</a>
			<i class="fa-solid fa-angle-right" />
			<h2>{title}:</h2>
		</span>
		<SearchInput category={title.toLowerCase()} {search} />
	</header>

	<ul class="grid grid-cols-1 gap-4">
		<li class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{#each recipes as recipe}
				<RecipeCard {...recipe} />
			{/each}
		</li>
	</ul>
</section>
