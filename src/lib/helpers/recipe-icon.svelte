<script lang="ts">
	export let category: string;
</script>

{#if category.toLowerCase() === 'cocktail'}
	<i class="fa-solid fa-martini-glass-citrus" />
{:else if category.toLowerCase() === 'food'}
	<i class="fa-solid fa-utensils" />
{:else}
	<i class="fa-solid fa-kitchen-set" />
{/if}
