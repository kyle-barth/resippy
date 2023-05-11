<script lang="ts">
	import { AppShell, Modal, modalStore, type ModalComponent } from '@skeletonlabs/skeleton';

	import '@skeletonlabs/skeleton/styles/all.css';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// TODO change theme
	// import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';

	// Your custom Skeleton theme:
	// import '../themes/deep-ocean.postcss';
	// import '../themes/charcoal.postcss';
	// import '../themes/purple.postcss';
	// import '../themes/notepad.postcss';

	import '../app.postcss';

	import Header from '$lib/home/header.svelte';
	import SearchModal from '$lib/modals/search-modal.svelte';
	import PageLayout from '$lib/page-layout.svelte';
	import { triggerSearchModal } from '../helpers/trigger-search-modal';
	import DisableAutoScroll from '$lib/helpers/disable-auto-scroll.svelte';

	export let data;
	let recipes = data.recipes;

	const modalComponentRegistry: Record<string, ModalComponent> = {
		modalSearch: { ref: SearchModal, props: { recipes } }
	};

	function onWindowKeydown(e: KeyboardEvent): void {
		if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
			e.preventDefault();
			$modalStore.length ? modalStore.close() : triggerSearchModal();
		}
	}
</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->
<svelte:window on:keydown|stopPropagation={onWindowKeydown} />
<Modal components={modalComponentRegistry} />

<AppShell regionPage="overflow-y-scroll" slotFooter="bg-black p-4">
	<DisableAutoScroll />
	<PageLayout>
		<div class="container h-full mx-auto justify-center items-center grid grid-cols-1 gap-10">
			<Header />

			<slot />
		</div>
	</PageLayout>
</AppShell>
