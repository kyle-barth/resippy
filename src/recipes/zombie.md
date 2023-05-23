---
title: Zombie
summary: A potent and tropical cocktail that packs a punch with its blend of rums and exotic flavors.
description: The Zombie is a legendary Tiki cocktail known for its powerful and intoxicating nature. Created by Donn Beach (aka Don the Beachcomber) in the 1930s, this cocktail was intended to "wake the dead" with its strong mix of rums and tropical flavors. The Zombie typically combines multiple types of rum, such as blended aged rum, column still aged rum, and black blended overproof rum, along with ingredients like Velvet Falernum, lime juice, grapefruit juice, cinnamon syrup, grenadine, Angostura Bitters, and Herbasaint or Absinthe. The result is a complex and deliciously dangerous concoction that will transport you to a tropical paradise. This cocktail is not for the faint of heart, as it packs a serious punch, so sip it slowly and savor the exotic flavors. The Zombie is the perfect choice for those seeking a bold and adventurous cocktail that promises a taste of the Caribbean with every sip.
src: '/assets/zombie-cocktail.jpeg'
category: 'Cocktail'
---

<script>
	import Recipe from '$lib/components/recipe/recipe.svelte';

	const steps = [
		{
			title: 'Blend Ingredients',
			instructions: 'Combine the following ingredients into a blender:',
			ingredients: ['45ml Blended Aged Rum', '45ml Column Still Aged Rum', '30ml Black Blended Overproof Rum', '15ml Velvet Falernum', '22.5ml Fresh Lime Juice', '7.5ml Grapefruit Juice', '7.5ml Cinnamon Syrup', '5ml of Grenadine', '1 Dash of Angostura Bitters', '1 Dash of Herbasaint or Absinthe']
		},
		{
			title: 'Add Ice',
			instructions: 'Add approximately 12 ounces of crushed ice and 4 large cubes to the blender.'
		},
		{
			title: 'Blend',
			instructions: 'Blend briefly to combine all the ingredients and achieve a slushy consistency.'
		},
		{
			title: 'Strain & Garnish',
			instructions: 'Strain the mixture into your glass and garnish with a mint sprig.'
		}
	];
</script>

<Recipe {title} {description} {steps} {src} />
