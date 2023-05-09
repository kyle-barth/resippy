---
title: Neapolitan Pizza
summary: Leopard spotted bread typically topped with fresh tomato sauce, mozzarella cheese, and fresh basil.
description: Neapolitan-style pizza is a classic Italian pizza that has become popular worldwide. It is characterized by its thin and crispy crust, which is made with high-protein flour, water, yeast, and salt. The dough is then stretched by hand and topped with fresh tomato sauce, mozzarella cheese, and fresh basil. The pizza is cooked in a wood-fired oven, which gives it a distinct smoky flavor and a soft, chewy texture. Neapolitan-style pizza is a perfect balance of flavors and textures, and it is a delicious and satisfying meal that is enjoyed by pizza lovers around the world.
src: '/assets/neapolitan-pizza.jpeg'
category: 'Food'
---

<script>
	import Recipe from '$lib/recipes/recipe.svelte';

	const steps = [
		{
			title: 'Night before pizza combine (Poolish)', 
			ingredients: ['100g Water', '100ml 00 Flour', '1 Sachet Yeast', '5g Honey']
		},
		{
			title: '3pm next day - combine and kneed', 
			ingredients: ['Poolish', '240g 00 Flour', '145g Water', '10g Salt']
		}
	]
</script>

<Recipe {title} {description} {steps} {src} />
