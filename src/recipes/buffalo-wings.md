---
title: Air Fryer Buffalo Wings
summary: Spicy crispy chicken wings flavoured with the famous sauce.
description: Buffalo wings were invented in the 1960s in Buffalo, New York by a woman named Teressa Bellissimo. The story goes that one evening, when her son and his friends came to her restaurant, she had to improvise a quick snack with the only ingredients available; chicken wings, hot sauce, and butter. She deep-fried the wings, then tossed them in the hot sauce and butter mixture, creating the first batch of Buffalo wings. They were an instant hit and quickly became a local specialty. Today, Buffalo wings can be found all over the world, with many variations of the sauce and accompaniments.
src: '/assets/buffalo-wings.jpeg'
category: 'Food'
---

<script>
	import Recipe from '$lib/recipes/recipe.svelte';

	const steps = [
		{
			title: 'Wings prep & frying',
            instructions: 'Prep wings, season them with salt and pepper, then Air Fry prepped wings for 15-20 mins on 205°C.',
			ingredients: ['500g Chicken Wings']
		},
		{
			title: 'Buffalo Sauce',
            instructions: 'Melt together.',
            ingredients: ['20g Butter', '60g Franks Red Hot', '10g Honey']
		},
		{
			title: 'When wings are done',
            instructions: 'Toss together.'
		},

	]
</script>

<Recipe {title} {description} {steps} {src} />
