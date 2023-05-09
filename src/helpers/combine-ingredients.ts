export function combineIngredients(ingredients: string[]) {
	const combinedIngredients = {} as any;

	for (const ingredient of ingredients) {
		const match = ingredient.match(/^([\d.]+)(\s*\S+)?\s+(.+)$/);
		if (!match) {
			throw new Error(`Invalid ingredient: ${ingredient}`);
		}
		const [, amountStr, unit, name] = match;
		const amount = parseFloat(amountStr);

		const existingIngredient = combinedIngredients[name];
		if (existingIngredient) {
			if (existingIngredient.unit && unit && existingIngredient.unit !== unit) {
				throw new Error(`Conflicting units for ingredient: ${name}`);
			}
			existingIngredient.amount += amount;
		} else {
			combinedIngredients[name] = { amount, unit };
		}
	}

	return Object.entries(combinedIngredients).map(
		// @ts-ignore
		([name, { amount, unit }]) => `${amount}${unit || ''} ${name}`
	);
}
