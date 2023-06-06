<script lang="ts">
	import CategoryIcon from '$lib/components/category-icon/category-icon.svelte';
	import Intro from '$lib/components/intro/intro.svelte';
	import Recipes from '$lib/components/recipes/recipes.svelte';
	import { omit } from '$lib/helpers/omit.js';
	import { formSpacing } from '$lib/helpers/page-spacing.js';
	import { categories } from '$lib/stores/categories.js';

	export let data;
	const recipes = data.recipes.map((recipe) => omit(recipe, 'description'));
</script>

<svelte:head>
	<title>Resippy</title>
	<meta
		name="description"
		content="A collection of recipes for food, drinks, sauces, and seasonings."
	/>
	<meta name="keywords" content="recipes, food, drinks, sauces, seasonings" />
</svelte:head>

<Intro />

<section class="{formSpacing} flex flex-col justify-center items-center">
	<h2 class="">Browse by category:</h2>
	<nav class="w-full sm:w-auto">
		<ul class="{formSpacing} flex flex-wrap justify-between items-center">
			{#each Object.keys($categories) as category}
				<li>
					<a
						class="chip h-12 unstyled flex flex-col justify-center items-center variant-ghost-tertiary"
						href="/category/{category.toLowerCase()}"
					>
						<CategoryIcon {category} />
						{category}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</section>

<hr />

<Recipes {recipes} />
