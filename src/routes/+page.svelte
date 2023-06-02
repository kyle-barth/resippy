<script lang="ts">
	import Carousel from '$lib/components/carousel/carousel.svelte';
	import CategoryIcon from '$lib/components/category-icon/category-icon.svelte';
	import { omit } from '$lib/helpers/omit.js';
	import { formSpacing } from '$lib/helpers/page-spacing.js';
	import { categories } from '$lib/stores/categories.js';

	export let data;
	const recipes = data.recipes.map((recipe) => omit(recipe, 'description'));
</script>

<section class="{formSpacing} flex flex-col justify-center items-center">
	<h2 class="">Browse by category:</h2>
	<nav>
		<ul class="{formSpacing} flex flex-wrap justify-center items-center">
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

<Carousel {recipes} />
