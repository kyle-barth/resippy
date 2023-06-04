<script lang="ts">
	import CategoryIcon from '$lib/components/category-icon/category-icon.svelte';
	import RecipeCard from '$lib/components/recipe-card/recipe-card.svelte';
	import { formSpacing, spacing } from '$lib/helpers/page-spacing';
	import type { GroupedRecipe } from '$lib/types';

	const li = 'w-64 grid';

	export let groupedRecipe: GroupedRecipe;
</script>

<section class="{spacing} flex sm:flex-row flex-col">
	<div class="sm:w-20 gap-2 sm:gap-0 flex sm:flex-col items-center justify-center">
		<CategoryIcon fontSize="text-xl" category={groupedRecipe.category} />
		<h3 class="sm:w-64 flex items-center justify-center">{groupedRecipe.category}</h3>
	</div>

	<div class="overflow-auto xl:block flex -mt-4 -mb-2">
		<ul class="{spacing} flex flex-row flex-nowrap p-4">
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
