---
title: Neapolitan Pizza Dough
summary: Leopard spotted goodness.
description: Neapolitan-style pizza is a classic Italian pizza that has become popular worldwide. It is characterized by its thin and crispy crust, which is made with high-protein flour, water, yeast, and salt. The dough is then stretched by hand and topped with fresh tomato sauce, mozzarella cheese, and fresh basil. The pizza is cooked in a wood-fired oven, which gives it a distinct smoky flavor and a soft, chewy texture. Neapolitan-style pizza is a perfect balance of flavors and textures, and it is a delicious and satisfying meal that is enjoyed by pizza lovers around the world.
src: '/assets/neapolitan-pizza.jpeg'
category: 'Food'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Autolyse', 
			instructions: 'Two - three nights before pizza time, loosely mix together until flour fully hydrated and leave to autolyse for 2 hours. Feel free to skip autolyse / slap + folds for stand mixer use.',
			ingredients: ['275g 00 Flour', '180g Water']
		},
		{
			title: 'Add yeast', 
			instructions: 'Add yeast and work the dough until fully incorporated.',
			ingredients: ['1g Yeast']
		},
		{
			title: 'Add salt', 
			instructions: 'Add salt and work the dough until fully incorporated.',
			ingredients: ['6g Salt']
		},
		{
			title: 'Slap and folds', 
			instructions: 'Once fully incorporated slap and fold dough every 30 mins 4 times (2 hours slap + folds total).',
		},
		{
			title: 'Portion dough and wait...', 
			instructions: 'Slap air out of the dough and portion dough into 230g balls. Transfer shaped dough balls into covered fridge container and ferment for two to three days, if dough over ferments reshape the dough 24 hours before use.',
		},
	]
</script>

<Recipe {title} {description} {steps} {src} />
