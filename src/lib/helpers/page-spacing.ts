export const spacing = 'sm:gap-10 gap-8';
export const padding = 'sm:p-10 p-5';

export const formSpacing = spacing.replace(
	/gap-(\d+)/g,
	(match, number) => `gap-${Math.ceil(number / 2)}`
);
