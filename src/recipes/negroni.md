---
title: Negroni
summary: A classic cocktail made with gin, rosso vermouth, campari, bitters, and a citrus peel.
description: The Negroni, a classic cocktail with a history dating back to the early 20th century, is a popular drink known for its distinct flavor and simple yet elegant recipe. It is said to have originated in Florence, Italy, in the 1910s, when Count Camillo Negroni requested his favorite cocktail, the Americano, to be made with gin instead of soda water. The resulting drink, now known as the Negroni, quickly gained popularity and has since become a staple in the world of mixology. Its signature ingredients include gin, sweet vermouth, and Campari, which create a bold and bittersweet taste that is enjoyed by many cocktail enthusiasts today.
src: '/assets/negroni.jpeg'
category: 'Cocktail'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Stir Together', 
			instructions: 'Recommendations: Bombay Sapphire & Cocchi Storico Vermouth Di Torino',
			ingredients: ['30ml Gin', '30ml Rosso Vermouth', '30ml Campari', '1 Dash Bitters']
		},
		{
			title: 'Garnish', 
			instructions: 'Express citrus oil over drink',
			ingredients: ['2inch Orange Peel']
		}
	]
</script>

<Recipe {title} {description} {steps} {src} />
