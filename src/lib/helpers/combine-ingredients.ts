export function combineIngredients(ingredients: string[]): string[] {
	const combinedIngredients: { [name: string]: { amount: number; unit?: string } } = {};

	for (const ingredient of ingredients) {
		const match = ingredient.match(/^((\d+\s)?\d+\/\d+|\d+(\.\d+)?)(\s*\S+)?\s+(.+)$/);
		if (!match) {
			throw new Error(`Invalid ingredient: ${ingredient}`);
		}
		const [, amountStr, , , unit, name] = match;
		const amount = eval(amountStr);

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
		([name, { amount, unit }]) => `${amount}${unit || ''} ${name}`
	);
}
