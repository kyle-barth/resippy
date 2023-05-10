export interface Recipe {
	title: string;
	description: string;
	img: string;
	category: string;
	slug: string;
}

export interface GroupedRecipes {
	category: string;
	recipes: Recipe[];
}

export type Step = {
	title: string;
	instructions?: string;
	ingredients?: string[];
};
