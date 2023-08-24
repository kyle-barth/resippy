---
title: Old Fashioned
summary: A classic cocktail made with whiskey, sugar, bitters, and a citrus peel.
description: The old fashioned cocktail, believed to have been enjoyed in the early 19th century or earlier, is one of the simpler and earlier versions of cocktails. It was named in the 1880s and preceded the development of advanced bartending techniques and recipes in the later part of the 19th century. The word "cocktail" was first defined in a letter to The Balance and Columbian Repository in 1806 as a potent concoction of spirits, bitters, water, and sugar, essentially the recipe for an old fashioned.
src: '/assets/old-fashioned.jpeg'
category: 'Cocktail'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Stir Together in a mixing glass', 
			ingredients: ['2oz Bourbon', '1/3oz Maple Syrup', '2 Dashes Angostura Bitters', '1/4 Orange Wheel']
		},
		{
			title: 'Pour', 
			instructions: 'Pour mix into tumbler glass with a large clear ice cube',
			ingredients: ['1 Large Clear Ice Cube']
		},
		{
			title: 'Garnish', 
			instructions: 'Express citrus oil over drink, stab orange peel and cheery onto cocktail skewer.',
			ingredients: ['2inch Orange Peel', '1 Maraschino Cherry']
		}
	]
</script>

<Recipe {title} {description} {steps} {src} />
