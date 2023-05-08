<script lang="ts">
	import RecipeCard from '$lib/home/recipe-card.svelte';

	export let data;
	let recipes = data.recipes;
</script>

<section>
	<ul class="grid grid-cols-1 gap-4">
		<li class="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
			{#each recipes as recipe}
				<RecipeCard {...recipe} />
			{/each}
		</li>
	</ul>
</section>
