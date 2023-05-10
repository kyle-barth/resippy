<script lang="ts">
	export let category: string;
</script>

{#if category.toLowerCase() === 'cocktail'}
	<i class="fa-solid fa-martini-glass-citrus" />
{:else if category.toLowerCase() === 'food'}
	<i class="fa-solid fa-utensils" />
{:else if category.toLowerCase() === 'seasoning'}
	<i class="fa-solid fa-jar" />
{:else if category.toLowerCase() === 'sauce'}
	<i class="fa-solid fa-droplet" />
{:else}
	<i class="fa-solid fa-kitchen-set" />
{/if}
