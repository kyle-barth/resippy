---
title: Espresso Martini
summary: A sophisticated and energizing cocktail featuring the rich flavors of coffee and vodka.
description: The Espresso Martini is a classic cocktail that has become a favorite among coffee and cocktail enthusiasts alike. It was created in the 1980s by London bartender Dick Bradsell, who was asked to create a drink that would "wake me up, and then f*** me up." The result was a perfect blend of coffee, vodka, and sweetness. The cocktail typically consists of vodka, freshly brewed espresso coffee, coffee liqueur, and a touch of sugar syrup. It is shaken vigorously with ice to create a frothy texture and strained into a martini glass. The Espresso Martini offers a delightful combination of strong coffee flavors, a hint of sweetness, and a smooth, velvety finish. It is the perfect choice for those seeking an elegant and energizing drink to enjoy during a night out or as an after-dinner treat.
src: '/assets/espresso-martini.jpeg'
category: 'Cocktail'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Combine',
			instructions: 'Combine the following ingredients into a shaker, Ron Zacapa Rum, Vanilla Vodka or Salted Caramel Vodka if you have it on hand is a must try!',
			ingredients: ['1.5oz Vodka', '3/4oz Mr Black', '1oz Fresh Espresso', '1/4oz Rich Simple Syrup', '1 Squeeze of Citrus Oil from 1 inch Orange Peel']
		},
		{
			title: 'Shake & Strain',
			instructions: 'Shake vigorously with ice to chill and create a frothy texture, then strain into a martini glass.'
		},
		{
			title: 'Garnish',
			instructions: 'Optionally, garnish with coffee beans or a twist of orange peel.'
		}
	];
</script>

<Recipe {title} {description} {steps} {src} />
