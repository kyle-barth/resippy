---
title: Old Fashioned
summary: A classic cocktail made with whiskey, sugar, bitters, and a citrus peel.
description: The old fashioned cocktail, believed to have been enjoyed in the early 19th century or earlier, is one of the simpler and earlier versions of cocktails. It was named in the 1880s and preceded the development of advanced bartending techniques and recipes in the later part of the 19th century. The word "cocktail" was first defined in a letter to The Balance and Columbian Repository in 1806 as a potent concoction of spirits, bitters, water, and sugar, essentially the recipe for an old fashioned.
src: '/assets/old-fashioned.jpeg'
category: 'Cocktail'
---

<script>
	import Recipe from '$lib/recipes/recipe.svelte';

	const steps = [
		{
			title: 'Stir Together', 
			ingredients: ['50ml Bourbon', '2-4 bar spoons Maple Syrup', 'Orange Peel']
		}
	]
</script>

<Recipe {title} {description} {steps} {src} />
