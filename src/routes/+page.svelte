<script lang="ts">
	import RecipeCard from '$lib/components/recipe-card/recipe-card.svelte';
	import _ from 'lodash';

	export let data;
	const recipes = data.recipes.map((recipe) => _.omit(recipe, 'description'));
</script>

<section>
	<ul class="grid grid-cols-1 gap-4">
		<li class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{#each recipes as recipe}
				<RecipeCard {...recipe} />
			{/each}
		</li>
	</ul>
</section>
