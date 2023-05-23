---
title: Mojito
summary: A refreshing and timeless cocktail featuring the vibrant flavors of lime, mint, and rum.
description: The Mojito is a classic cocktail that originated in Cuba and has become a beloved drink around the world. Known for its refreshing and vibrant flavors, the Mojito is the perfect choice for those seeking a light and invigorating cocktail. The cocktail is traditionally made by muddling fresh mint leaves and lime wedges with sugar to release their essential oils and flavors. This mixture is then combined with white rum, ice, and soda water to create a fizzy and refreshing drink. The Mojito offers a delightful balance of sweetness, citrusy tang, and aromatic mint, making it a go-to choice for hot summer days or any occasion that calls for a cool and rejuvenating beverage. With its timeless appeal, the Mojito continues to be a favorite among cocktail enthusiasts everywhere.
src: '/assets/mojito.jpeg'
category: 'Cocktail'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Muddle',
			instructions: 'In a glass, muddle the following ingredients:',
			ingredients: ['8 Fresh Mint Leaves', '1/2 a Lime (cut into wedges)', '2tsp Sugar']
		},
		{
			title: 'Add Ice & Rum',
			instructions: 'Add ice to the glass, followed by rum and top with Soda Water',
			ingredients: ['60ml White Rum', '30ml Soda Water']
		},
		{
			title: 'Stir & Garnish',
			instructions: 'Stir gently to combine the ingredients. Garnish with a sprig of fresh mint and a lime wheel.'
		}
	];
</script>

<Recipe {title} {description} {steps} {src} />
