---
title: French Martini
summary: A sophisticated and fruity cocktail with a touch of French elegance.
description: The French Martini is a modern classic cocktail that combines the flavors of vodka, raspberry liqueur, and pineapple juice. Despite its name, this cocktail didn't originate in France but is said to have been created in the 1980s by a bartender in New York City. The combination of smooth vodka, sweet raspberry liqueur, and tangy pineapple juice creates a harmonious balance of flavors. The French Martini is typically shaken with ice and strained into a martini glass, resulting in a vibrant and elegant drink. Sipping on a French Martini evokes a sense of sophistication and adds a touch of Parisian charm to any occasion.
src: '/assets/french-martini.jpeg'
category: 'Cocktail'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Mix',
			instructions: 'In a cocktail shaker filled with ice, combine the following ingredients:',
			ingredients: ['45ml Vodka', '15ml Raspberry Liqueur', '45ml Pineapple Juice']
		},
		{
			title: 'Shake & Strain',
			instructions: 'Shake the mixture vigorously until well combined. Strain it into a chilled martini glass.'
		},
		{
			title: 'Garnish',
			instructions: 'Garnish with a fresh raspberry or a twist of lemon peel, if desired.'
		}
	];
</script>

<Recipe {title} {description} {steps} {src} />
