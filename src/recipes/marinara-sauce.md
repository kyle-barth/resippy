---
title: Marinara Sauce
summary: Sweet and rich tomato sauce.
description: Marinara sauce traces back to Naples, Italy, where it was created in the mid-16th century. Initially known as "salsa alla marinara," it was a simple sauce made from tomatoes, garlic, olive oil, and herbs, often served with seafood. The term "marinara" likely originates from "marinaro," meaning sailor, suggesting its popularity among Naples' seafaring population. Over time, marinara sauce evolved into a staple of Italian cuisine, spreading globally due to Italian immigration. Today, it remains a versatile and beloved sauce used in various dishes worldwide.
src: '/assets/marinara-sauce.jpg'
category: 'Sauce'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Mix',
			instructions: 'Break down tomatoes in tomato mill, mash garlic with press garlic, slice the basil leaves thinly and combine with all other ingredients.',
			ingredients: ['1tin 400g San Marzano Tomatoes', '2 Basil Leaves', '1 Garlic Clove', '1tbsp Sugar', '1/2tsp Salt', '1/4tsp Italian Herbs']
		},
		{
			title: 'Simmer',
			instructions: 'Simmer the sauce for 15-30min until the acidity of the tomatoes in the Masala Sauce has turned into a rich sweet tomato flavour.'
		}
	]
</script>

<Recipe {title} {steps} {src} />
