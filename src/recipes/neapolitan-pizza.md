---
title: Neapolitan Pizza Dough
summary: Leopard spotted goodness.
description: Neapolitan-style pizza is a classic Italian pizza that has become popular worldwide. It is characterized by its thin and crispy crust, which is made with high-protein flour, water, yeast, and salt. The dough is then stretched by hand and topped with fresh tomato sauce, mozzarella cheese, and fresh basil. The pizza is cooked in a wood-fired oven, which gives it a distinct smoky flavor and a soft, chewy texture. Neapolitan-style pizza is a perfect balance of flavors and textures, and it is a delicious and satisfying meal that is enjoyed by pizza lovers around the world.
src: '/assets/neapolitan-pizza.jpeg'
category: 'Food'
---

<script>
	import Recipe from '$lib/recipes/recipe.svelte';

	const steps = [
		{
			title: 'Create Poolish', 
			instructions: 'The night before you want pizza, combine the following ingredients in a tupperware container and fridge overnight.',
			ingredients: ['100g Water', '100g 00 Flour', '7g Yeast', '5g Honey']
		},
		{
			title: 'Create pizza dough', 
			instructions: 'Combine Poolish with the following ingredients and kneed until dough no longer sticky.',
			ingredients: ['240g 00 Flour', '145g Water', '10g Salt']
		},
		{
			title: 'Rest - Part 1', 
			instructions: 'Take dough onto counter top, and shape into a rough ball. Cover with a light layer of olive oil and leave uncovered for 15min.',
			ingredients: ['1tbsp Olive Oil']
		},
		{
			title: 'Rest - Part 2', 
			instructions: 'Work dough into tight ball. Cover with a light layer of olive oil and leave covered for a minimum of 1 hour.',
			ingredients: ['1tbsp Olive Oil']
		},
		{
			title: 'Rest - Part 3', 
			instructions: 'Divide the dough into 2 balls of 230g each (or 250g if using a larger pizza oven). Lightly coat the dough balls in olive oil and place them in a covered bread proofing box. Let the dough rest for 1-2 hours, depending on the room temperature, until the gluten has relaxed and the dough can be stretched easily without springing back.',
			ingredients: ['3tbsp Olive Oil']
		},
	]
</script>

<Recipe {title} {description} {steps} {src} />
