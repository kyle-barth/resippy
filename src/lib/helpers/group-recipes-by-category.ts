import type { GroupedRecipe, Recipe } from '$lib/types';

export function groupRecipesByCategory(recipes: Recipe[]): GroupedRecipe[] {
	const groupedRecipes: GroupedRecipe[] = [];

	recipes.forEach((recipe) => {
		const existingCategory = groupedRecipes.find(
			(groupedRecipe) => groupedRecipe.category === recipe.category
		);

		if (existingCategory) {
			existingCategory.recipes.push(recipe);
		} else {
			groupedRecipes.push({
				category: recipe.category,
				recipes: [recipe]
			});
		}
	});

	return groupedRecipes;
}
