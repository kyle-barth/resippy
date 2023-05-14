import type { SearchFilter } from '$lib/types';
import { writable } from 'svelte/store';

export const searchFilters = writable({
	title: true,
	summary: true,
	description: true,
	category: true
} as SearchFilter);
