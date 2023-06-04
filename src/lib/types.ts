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

export type SearchFilter = { [key in keyof Omit<Recipe, 'slug' | 'src'>]: boolean };

export interface GroupedRecipe {
	category: string;
	recipes: Recipe[];
}

export type Step = {
	title: string;
	instructions?: string;
	ingredients?: string[];
};
