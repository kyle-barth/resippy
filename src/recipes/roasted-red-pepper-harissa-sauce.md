---
title: Roasted Red Pepper & Harissa Sauce
summary: Sweet flavourful mediterranean inspired pasta sauce.
src: '/assets/roasted-red-pepper-harissa-sauce.jpeg'
category: 'Sauce'
---

<script>
	import Recipe from '$lib/recipes/recipe.svelte';

	const steps = [
		{
			title: 'Combine',
			instructions: 'Add ingredients to blender, blend until smooth.', 
			ingredients: ['1can Roasted Red Peppers', '1can Peeled Plum Tomatoes']
		},
		{
			title: 'Toast',
			instructions: 'Toast in a low/medium heat pan until fragrant.', 
			ingredients: ['0.5tsp Black Pepper', '0.5tsp Rosemary', '0.5tsp Sweet Smoked Paprika', '0.5tsp Italian Seasoning', '0.5tsp Onion Granules']
		},
		{
			title: 'Simmer',
			instructions: 'Add crushed garlic cloves, tomato purée and rose harissa to the toasted spices for 1 min. Then pour in the blended sauce and simmer until desired consistency.', 
			ingredients: ['2tbsp Balsamic Vinegar', '1tbsp Olive Oil', '1tsp Salt']
		},
	]
</script>

<Recipe {title} {steps} {src} />
