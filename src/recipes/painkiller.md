---
title: Painkiller
summary: A classic tiki cocktail that transports you to a tropical paradise with its blend of rum, pineapple, and coconut.
description: The Painkiller cocktail was created by Charles Tobias, the founder of Pusser's Rum, in the British Virgin Islands. Inspired by the Piña Colada, Tobias combined Pusser's Rum with pineapple juice, orange juice, and cream of coconut. The drink gained popularity for its tropical and refreshing taste, becoming the official cocktail of the British Virgin Islands. The name "Painkiller" reflects its ability to provide relaxation and escape. Traditionally the bartender would ask you how much pain you are in, to which the more you play it up the more rum you get in the mix!
src: '/assets/painkiller.jpeg'
category: 'Cocktail'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Mix',
			instructions: 'In a cocktail shaker filled with ice, combine the following ingredients:',
			ingredients: ['60ml Dark Rum', '120ml Pineapple Juice', '30ml Orange Juice', '30ml Cream of Coconut']
		},
		{
			title: 'Shake & Strain',
			instructions: 'Shake the mixture vigorously until well combined. Strain it into a glass filled with crushed ice.'
		},
		{
			title: 'Garnish',
			instructions: 'Grate fresh nutmeg over the top of the drink as a garnish. Add a pineapple wedge and a maraschino cherry.'
			}
	];
</script>

<Recipe {title} {description} {steps} {src} />
