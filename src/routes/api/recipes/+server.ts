import type { Recipe } from '$lib/types';
import { json } from '@sveltejs/kit';

async function getRecipes() {
	let recipes = [];
	const paths = import.meta.glob('/src/recipes/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Recipe, 'slug'>;
			const post = { ...metadata, slug } satisfies Recipe;

			recipes.push(post);
		}
	}

	return recipes;
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const recipes = await getRecipes();
	return json(recipes);
}
