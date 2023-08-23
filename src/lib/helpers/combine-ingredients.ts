function formatAmount(amount: number) {
	const roundedAmount = Math.round(amount * 100) / 100; // Round to 2 decimal places

	if (Number.isInteger(roundedAmount)) {
		return roundedAmount.toString(); // Whole number, no fraction formatting needed
	}

	// Check if roundedAmount is a fraction with a denominator of a power of 10
	const fractionDenominators = [2, 4, 5, 10, 20, 25, 50];
	for (const denominator of fractionDenominators) {
		if (Math.abs(roundedAmount * denominator) % 1 === 0) {
			return `${Math.round(roundedAmount * denominator)}/${denominator}`;
		}
	}

	return roundedAmount.toFixed(2); // Default to decimal format
}

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
		([name, { amount, unit }]) => `${formatAmount(amount)}${unit || ''} ${name}`
	);
}
