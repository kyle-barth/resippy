<script lang="ts">
	export let category: string;
	export let fontSize: string | undefined = undefined;
</script>

{#if category.toLowerCase() === 'cocktail'}
	<i class="{fontSize} fa-solid fa-martini-glass-citrus" />
{:else if category.toLowerCase() === 'food'}
	<i class="{fontSize} fa-solid fa-utensils" />
{:else if category.toLowerCase() === 'seasoning'}
	<i class="{fontSize} fa-solid fa-jar" />
{:else if category.toLowerCase() === 'sauce'}
	<i class="{fontSize} fa-solid fa-droplet" />
{:else}
	<i class="{fontSize} fa-solid fa-kitchen-set" />
{/if}
