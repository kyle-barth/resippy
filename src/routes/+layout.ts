export const prerender = true;

import type { RecipeData } from '$lib/types.js';

/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	const response = await fetch('/api/recipes');
	const recipes: RecipeData[] = await response.json();

	return { recipes };
}
