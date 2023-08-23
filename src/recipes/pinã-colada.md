---
title: Piña Colada
summary: A tropical and creamy cocktail that transports you to a beachside paradise with its blend of pineapple, coconut, and rum.
description: The Piña Colada is a classic tropical cocktail with origins in Puerto Rico. Its creation is attributed to bartender Ramón "Monchito" Marrero, who crafted the drink in the mid-20th century at the Caribe Hilton Hotel's Beachcomber Bar. However, the cocktail's history also includes a legendary pirate tale. According to folklore, the pirate Roberto Cofresí and his crew mixed coconut milk, pineapple juice, and rum to boost their spirits during their sea voyages in the early 19th century. Regardless of its exact origins, the Piña Colada combines the tropical sweetness of pineapple, the creamy richness of coconut, and the smoothness of rum, capturing the essence of a beachside paradise.
src: '/assets/pina-colada.webp'
category: 'Cocktail'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Blend',
			instructions: 'In a blender, combine the following ingredients:',
			ingredients: ['1.5oz Cream of Coconut (Coco Lopez)', '1oz Coconut Milk', '2oz Fresh Pineapple Juice', '2oz White Rum', '1 Handful Ice']
		},
		{
			title: 'Blend & Serve',
			instructions: 'Blend until smooth and frothy. Pour into a hurricane glass and serve chilled.'
		},
		{
			title: 'Garnish',
			instructions: 'Garnish with Spiked Maraschino Cherry Pineapple Fronds.'
		}
	];
</script>

<Recipe {title} {description} {steps} {src} />
