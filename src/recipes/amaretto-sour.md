---
title: Amaretto Sour
summary: A classic cocktail with a perfect balance of sweetness and tanginess.
src: '/assets/amaretto-sour.jpeg'
category: 'Cocktail'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Mix Ingredients',
			instructions: 'In a shaker, combine the amaretto, lemon juice, and simple syrup. Dry shake 10 seconds, then wet shake for 10 seconds.',
			ingredients: ['1.5oz Amaretto', '3/4oz Lemon Juice', '1/2oz Rich Simple Syrup', '1/2oz Egg White (or Chickpea Water)']
		},
		{
			title: 'Strain and Serve',
			instructions: 'Double strain into a small coup glass.',
		},
		{
			title: 'Garnish',
			instructions: 'Garnish with a maraschino cherry and a few drops angostura bitters.',
			ingredients: ['1 Maraschino Cherry', '3 drops Angostura Bitters']
		}
	]
</script>

<Recipe {title} {steps} {src} />
