<script lang="ts">
	import { spacing } from '$lib/helpers/page-spacing';

	export let showIngredients: Boolean;
	export let toggle: () => void;
</script>

<div class="{spacing} flex flex-col-reverse sm:flex-row justify-between w-full">
	<span class="flex gap-4 items-center justify-center">
		{#if showIngredients}
			<i class="fa-solid fa-list-check text-3xl" />
		{:else}
			<i class="fa-solid fa-list-ol text-3xl" />
		{/if}
		<h2>{showIngredients ? 'Ingredients' : 'Steps'}</h2>
	</span>
	<button class="btn variant-soft-secondary" style="color: white !important;" on:click={toggle}
		>Show {showIngredients ? 'Steps' : 'Ingredients'}</button
	>
</div>
