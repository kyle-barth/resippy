export interface Recipe {
	title: string;
	summary: string;
	description?: string;
	src: string;
	category: string;
	slug: string;
}

export type RecipeData = Recipe & {
	slug: string;
};

export interface GroupedRecipes {
	category: string;
	recipes: Recipe[];
}

export type Step = {
	title: string;
	instructions?: string;
	ingredients?: string[];
};
