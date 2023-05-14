<script lang="ts">
	import { AppShell, Modal, modalStore, type ModalComponent } from '@skeletonlabs/skeleton';

	import Header from '$lib/components/header/header.svelte';
	import SearchModal from '$lib/components/modals/search-modal/search-modal.svelte';

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

	import DisableAutoScroll from '$lib/components/disable-auto-scroll/disable-auto-scroll.svelte';
	import PageLayout from '$lib/components/page-layout/page-layout.svelte';
	import { triggerSearchModal } from '$lib/helpers/trigger-search-modal';

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
