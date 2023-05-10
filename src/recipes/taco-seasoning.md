---
title: Taco Seasoning
summary: Inspired by Taco Bell's taco seasoning.
src: '/assets/taco-seasoning.jpeg'
category: 'Seasoning'
---

<script>
	import Recipe from '$lib/recipes/recipe.svelte';

	const steps = [
		{
			title: 'Combine',
			ingredients: ['1tsp Ground Cumin', '0.5tsp Chilli Powder', '0.5tsp Sweet Smoked Paprika', '0.5tsp Garlic Powder', '0.5tsp Onion Powder']
		}
	]
</script>

<Recipe {title} {steps} {src} />
