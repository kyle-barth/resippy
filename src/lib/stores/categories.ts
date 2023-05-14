import { writable } from 'svelte/store';

export const categories = writable({} as { [key: string]: boolean });
