---
title: Buttermilk Bay Fried Chicken
summary: Crispy on the outside. Juicy on the inside.
src: '/assets/fried-chicken.jpeg'
category: 'Food'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Tenderize',
			instructions: 'Stab chicken with a fork all over.', 
			ingredients: ['10 Pieces Chicken']
		},
		{
			title: 'Brine',
			instructions: 'Combine buttermilk, bay seasoning and salt. Refrigerate overnight.', 
			ingredients: ['450ml Buttermilk', '5g Salt', '20g Bay Seasoning']
		},
		{
			title: 'Bread',
			instructions: 'Combine breading, and double coat chicken. Pressing coating firmly into chicken.', 
			ingredients: ['400g Plain Flour', '40g Bay Seasoning', '5g Salt', '5g Pepper']
		},
		{
			title: 'Fry',
			instructions: 'Fry at 375°F 3 pieces at a time, oil temperature should drop to 350°F while cooking - until golden brown.'
		},
		{
			title: 'Season',
			instructions: 'Remove fried chicken from oil and immediately season with salt.'
		},
	]
</script>

<Recipe {title} {steps} {src} />
