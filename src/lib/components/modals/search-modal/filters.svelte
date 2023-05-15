<script lang="ts">
	import { searchFilters } from '$lib/stores/search-filters';
	import type { SearchFilter } from '$lib/types';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	export let onClick: (searchFilters: SearchFilter) => void;

	const icon = 'fa-solid w-3';

	const keys = Object.keys($searchFilters) as (keyof SearchFilter)[];

	function handleClick(key: keyof SearchFilter) {
		searchFilters.update((filters) => {
			$searchFilters[key] = !$searchFilters[key];
			return filters;
		});

		onClick($searchFilters);
	}
</script>

<Accordion rounded="" padding="p-4" hover="variant-soft">
	<AccordionItem>
		<svelte:fragment slot="lead">Filters</svelte:fragment>

		<svelte:fragment slot="summary"
			><span class="opacity-75 text-sm items-center">Include in search...</span></svelte:fragment
		>

		<svelte:fragment slot="content">
			<nav>
				<ul class="flex sm:flex-row flex-col gap-2 items-center">
					<span class="flex gap-2 flex-wrap">
						{#each keys as key}
							<span
								class="chip {$searchFilters[key]
									? 'variant-ghost-tertiary'
									: 'variant-soft-tertiary'}"
								on:click={() => handleClick(key)}
								on:keypress
							>
								{#if $searchFilters[key]}
									<i class="{icon} {$searchFilters[key] ? '' : 'opacity-50'} fa-check " />
								{:else}
									<i class="{icon} {$searchFilters[key] ? '' : 'opacity-50'} fa-xmark " />
								{/if}

								<li
									class="{$searchFilters[key] ? 'chip' : 'chip-disabled'} p-0 text-sm select-none"
								>
									{key}
								</li>
							</span>
						{/each}
					</span>
				</ul>
			</nav>
		</svelte:fragment>
	</AccordionItem>
</Accordion>
