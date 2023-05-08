import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const recipe = await import(`../../../recipes/${params.slug}.md`);

		return {
			content: recipe.default,
			meta: recipe.metadata
		};
	} catch (e) {
		throw error(404, `Could not find recipe ${params.slug}`);
	}
}
