export type Recipe = {
	title: string;
	description: string;
	img: string;
	category: string;
	slug: string;
};

export type Step = {
	title: string;
	ingredients: string[];
};
