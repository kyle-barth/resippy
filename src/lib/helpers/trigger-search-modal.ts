import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';

export function triggerSearchModal(): void {
	const modal: ModalSettings = {
		type: 'component',
		component: 'modalSearch',
		position: 'item-start'
	};
	modalStore.trigger(modal);
}
