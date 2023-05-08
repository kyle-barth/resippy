import { type ModalSettings, modalStore } from '@skeletonlabs/skeleton';

// Search
export function triggerSearchModal(): void {
	const modal: ModalSettings = {
		type: 'component',
		component: 'modalSearch',
		position: 'item-start'
	};
	modalStore.trigger(modal);
}
