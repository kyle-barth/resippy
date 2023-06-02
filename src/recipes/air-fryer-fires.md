---
title: Air Fryer fries
summary: Crispy on the outside. Fluffy on the inside.
src: '/assets/air-fryer-fries.jpeg'
category: 'Food'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Bring Water to Boil',
			instructions: 'Boil water with vinegar and salt mixed in.', 
			ingredients: ['500ml Water', '5g Salt', '1tbsp Vinegar']
		},
		{
			title: 'Prepare',
			instructions: 'While water is coming to the boil, cut up potato into 1cmx1cm fries.', 
			ingredients: ['1 Potato']
		},
		{
			title: 'Boil',
			instructions: 'Add fries to water and boil for 8min.'
		},
		{
			title: 'Dry',
			instructions: 'Remove fries from water and place onto paper towels, pat dry and let further dry until stopped steaming. In the meantime, preheat air fryer.'
		},
		{
			title: 'Fry',
			instructions: 'Spray fries with oil, and fry for 20min on 205°C.',
			ingredients: ['1tbsp oil']
		},
		{
			title: 'Season',
			instructions: 'Toss fries with plenty of salty and your seasoning of choice.'
		}
	]
</script>

<Recipe {title} {steps} {src} />
