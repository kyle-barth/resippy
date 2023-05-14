<script lang="ts">
	import Checkbox from '$lib/components/checkbox/checkbox.svelte';
	import { formSpacing } from '$lib/helpers/page-spacing';

	export let ingredients: string[];
</script>

<ul class="{formSpacing} flex flex-col">
	{#each ingredients as ingredient}
		<li>
			<Checkbox text={ingredient} />
		</li>
	{/each}
</ul>
