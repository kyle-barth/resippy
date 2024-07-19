---
title: Chicken Tikka Masala
summary: The UK's National dish, tender marinated chicken in a creamy curry sauce.
src: '/assets/chicken-tikka-masala.jpg'
category: 'Food'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Marination 1',
            instructions: 'Mix all ingredients together and marinate for 30mins.',
			ingredients: ['1/2 Lemon juiced', '1/2tsp Kashmiri Chilli Powder', '1.2kg Diced Chicken Thighs']
		},
		{
			title: 'Make Curry Paste',
			instructions: 'Grind spices in mortar & pestle, then heat oil until smoking and combine with the ground spices. Mustard Seed Oil can be replaced with any high smoking point oil.',
			ingredients: ['1tsp Garam Masala', '1tsp Cumin', '1tsp Tumeric', '1tsp Kasuri Methi', '1tbsp Garlic + Ginger Paste', '2tbsp Mustard Seed Oil']
		},
		{
			title: 'Marination 2',
			instructions: 'Combine Curry Paste from the previous step with the marinating chicken, add the yogurt and refrigerate overnight.',
			ingredients: ['3tbsp Greek Yogurt', '2tsp Salt']
		},
		{
			title: 'Chicken Tikka',
            instructions: 'Next day, take out marinated diced chicken and skewer it. Grill the chicken aiming for a good char on the outside. No need to be too concerned if the chicken is cooked through as it will finish in the sauce.'
		},
		{
			title: 'Masala Sauce',
            instructions: 'Sauté red onions until caramelised, add spices & Garlic + Ginger Paste until fragrant. Add the tins of tomatoes and mix together, empty it all into a blender and blend very thoroughly on high until sauce is smooth. Sieve sauce if desired for an even smoother creamier texture.',
            ingredients: ['4tbsp Garlic + Ginger Paste', '3 Green Cardamom Pods', '1tsp Cumin Seeds', '3 Bay Leaves', '2 Red Onions', '2tins 400g San Marzano Tomatoes', '1tbsp Coriander', '1tsp Kashmiri Chilli Powder', '1tsp Tumeric', '2tsp Roasted Garam Masala', '2tsp Kasuri Methi', '2tbsp Sugar', '1tsp Salt']
		},
		{
			title: 'Combine',
			instructions: 'Combine Masala Sauce with Chicken Tikka and cook until the acidity of the tomatoes in the Masala Sauce has turned into a rich sweet tomato flavour (roughly 30min-1hour). At this stage the chicken thighs will also be cooked through and tender, and you are ready to add the butter and cream. Season to taste! Optional: feel free to add red food colouring to achieve that takeaway color - if they are allowed to do it so are you!',
			ingredients: ['25g Butter', '150ml Cream']
		}
	]
</script>

<Recipe {title} {steps} {src} />
