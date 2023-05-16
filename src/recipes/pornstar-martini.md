---
title: Pornstar Martini
summary: A classic cocktail made with gin, rosso vermouth, campari, bitters, and a citrus peel.
description: The Pornstar Martini is a relatively new cocktail that has gained immense popularity in recent years. Its origins can be traced back to the early 2000s, when bartender Douglas Ankrah created the drink at The Townhouse bar in London. The cocktail's unique blend of sweet and sour flavors, along with its distinct passionfruit aroma, has made it a hit among those looking for a sophisticated yet fun drink. The cocktail typically consists of vanilla vodka, passionfruit puree, lime juice, and a dash of sugar syrup, with a shot of Prosecco served on the side. Its playful name and luxurious presentation, often served with a side of passionfruit pulp and a shot of Prosecco, have made the Pornstar Martini a popular choice for those looking to add a touch of glamour to their night out.
src: '/assets/pornstar-martini.png'
category: 'Cocktail'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Combine', 
			instructions: 'Combine the following ingredients into a boston shaker.',
			ingredients: ['50ml Vanilla Vodka', '25ml Passion Fruit Liquer', '25ml Orange Juice', '20ml Passion Fruit Syrup', '15ml Egg White', '1/2 Passion Fruit']
		},
		{
			title: 'Dry Shake', 
			instructions: 'Shake vigorously to emulsify the drink.'
		},
		{
			title: 'Wet Shake', 
			instructions: 'Add ice to the shaker and shake vigorously again to cool.'
		},
		{
			title: 'Pour & Garnish', 
			instructions: 'Double strain into a coup glass and float the other half of the passion fruit..',
			ingredients: ['1/2 Passion Fruit']
		}
	]
</script>

<Recipe {title} {description} {steps} {src} />
