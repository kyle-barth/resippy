---
title: Oklahoma Onion Burger
summary: A classic burger, rich with caramelised fried onion flavour.
src: '/assets/oklahoma-onion-burger.jpeg'
category: 'Food'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Prepare',
			instructions: 'Heat up a cast iron pan to smoking hot while preparing 30g of 80/20 steak burger by rolling it into a ball. Slice 1/4 White onion thinly as possible.', 
			ingredients: ['30g 80/20 Minced Steak (Blend of Ribeye, Sirloin and Chuck recommended)', '1/4 White Onion']
		},
		{
			title: 'Fry',
			instructions: 'Add burger ball into the pan and top with onions, then proceed to smash the burger, pressing the onion strands into the burger and season with salt + pepper.', 
			ingredients: ['1/2tsp Salt', '1/2tsp Pepper']
		},
		{
			title: 'Steam Buns',
			instructions: 'Once one side of the burger has developed a good crust, flip the burger onion side frying the onions. Now season again with salt and pepper, then place the bottom bun atop the burger on the pan, and place the top bun atop the bottom bun and proceed to steam the buns until onions are caramelised.',
			ingredients: ['1/2tsp Salt', '1/2tsp Pepper']
		},
		{
			title: 'Crown',
			instructions: 'Proceed to flip the burger over and crown the burger with the top bun. A single slice of american cheese and BBQ Sauce recommended.'
		}
	]
</script>

<Recipe {title} {steps} {src} />
