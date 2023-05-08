/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const recipe = await import(`../../../recipes/${params.slug}.md`);

	console.log(recipe);

	return {
		content: recipe.default,
		meta: recipe.metadata
	};
}
