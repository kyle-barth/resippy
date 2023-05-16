---
title: Black Pepper Sauce
summary: Sweet and spicy pepper sauce for stir frying.
description: Salt and pepper sauce is a popular Chinese condiment that is commonly used to flavor stir-fried dishes such as seafood, chicken, and vegetables. The sauce is made by mixing together salt, white pepper, and other spices such as garlic and ginger. Its exact origins are unclear, but it is believed to have originated in the Guangdong province of China and then spread throughout the country and to other parts of the world. In recent years, salt and pepper sauce has gained popularity in Western countries as a seasoning for french fries, popcorn, and other snack foods. Its versatility and simple yet flavorful taste have made it a favorite among many culinary enthusiasts.
src: '/assets/black-pepper-sauce.webp'
category: 'Sauce'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Combine',
			instructions: 'Heat until desired thickness.', 
			ingredients: ['59g Water', '2tbsp Soy', '2tbsp White Wine', '1tbsp Oyster Sauce', '2tsp Rice Wine Vinegar', '2tsp Brown Sugar', '1tsp Ground Black Pepper', '1tsp Sesame Oil', '1.5tsp Corn Starch']
		}
	]
</script>

<Recipe {title} {description} {steps} {src} />
