import type { Recipe } from '$lib/types.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch('api/recipes');
	const recipes: Recipe[] = await response.json();

	return { recipes };
}
