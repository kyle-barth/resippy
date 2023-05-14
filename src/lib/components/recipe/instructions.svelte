<script lang="ts">
	import { formSpacing, spacing } from '$lib/helpers/page-spacing';
	import type { Step } from '$lib/types';
	import Checkbox from '../checkbox/checkbox.svelte';

	export let steps: Step[];
</script>

<ol class="{spacing} flex flex-col">
	{#each steps as step, i}
		<li>
			<article class="{spacing} flex flex-col">
				<header class="m-auto">
					<h3>{`${i + 1}. ${step.title}`}</h3>
				</header>

				{#if step.instructions}
					<p>{step.instructions}</p>
				{/if}

				{#if step.ingredients}
					<ul class="{formSpacing} flex flex-col">
						{#each step.ingredients as ingredient}
							<li>
								<Checkbox text={ingredient} />
							</li>
						{/each}
					</ul>
				{/if}
			</article>
		</li>
	{/each}
</ol>
