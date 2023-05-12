---
title: Yorkshire Pudding
summary: The classic crispy exterior fluffy interior to add to a roast.
description: The origins of Yorkshire pudding can be traced back to the 1700s in Northern England, where it was originally served as a filling meal to feed large families. The dish became popular throughout England and beyond and is now commonly found in British cuisine. Yorkshire pudding is often served with roast beef and gravy, and is also sometimes used as a dessert when served with sweet toppings such as syrup or jam. Its light and fluffy texture and savory flavor have made it a beloved dish in British culture, and it continues to be enjoyed by many to this day.
src: '/assets/yorkshire-pudding.jpeg'
category: 'Food'
---

<script>
	import Recipe from '$lib/recipes/recipe.svelte';

	const steps = [
		{
			title: 'Night before',
            instructions: 'Mix all ingredients and store covered and refrigerate overnight',
			ingredients: ['140g Plain Flour', '4 Eggs', '200ml Whole Milk', '7g Salt', '3g Black Pepper']
		},
		{
			title: 'Hour before cooking',
            instructions: 'Take out batter and let rise to room temp.'
		},
		{
			title: 'Prep',
            instructions: 'Preheat oven to 200°C, with a tray in the oven with 1tsp tallow (beef fat) in 8 Yorkshire Pudding trays. When oven is up to temp and beef fat is hot, pour in batter and leave. Do not open the door for 25mins.',
            ingredients: ['8tsp Tallow']
		},

	]
</script>

<Recipe {title} {description} {steps} {src} />
