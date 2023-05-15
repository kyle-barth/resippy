// type OmitType<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function omit<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
	const shallowCopy = { ...obj };
	for (const key of keys) {
		delete shallowCopy[key];
	}
	return shallowCopy;
}
