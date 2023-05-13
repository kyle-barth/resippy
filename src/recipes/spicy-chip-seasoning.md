---
title: Spicy Chip Seasoning
summary: Inspired by Five Guys Cajun Fries seasoning.
src: '/assets/spicy-fries.jpeg'
category: 'Seasoning'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Combine', 
            instructions: 'Grind in pestle and mortar, store for future use.',
			ingredients: ['2tbsp Paprika', '1tbsp Italian Seasoning', '1tbsp Onion Granules', '1.5tsp Garlic Granules', '1tsp Black Pepper', '1tsp Cayenne Powder']
		}
	]
</script>

<Recipe {title} {steps} {src} />
