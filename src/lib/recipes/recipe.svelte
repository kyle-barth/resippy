<script lang="ts">
	import type { Step } from '$lib/types';
	import { combineIngredients } from '../../helpers/combine-ingredients';

	export let title: string;
	export let description: string;
	export let src: string;
	export let steps: Step[];

	let showIngredients = false;
	const ingredients = combineIngredients(
		steps
			.filter((s) => 'ingredients' in s)
			.flatMap((s) => s.ingredients)
			.filter((i) => i !== undefined) as string[]
	);

	const toggle = () => (showIngredients = !showIngredients);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section class="card overflow-hidden">
	<header class="relative flex items-center justify-center">
		<img
			class="bg-black/50 w-full sm:aspect-[10/3] aspect-[6/3] object-cover h-full opacity-50"
			{src}
			alt={title}
		/>
		<h1
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg"
		>
			{title}
		</h1>
	</header>

	<div class="p-10">
		<div class="flex flex-col gap-8">
			<div class="flex flex-col-reverse sm:flex-row gap-8 justify-between w-full">
				<span class="flex gap-4 items-center justify-center">
					{#if showIngredients}
						<i class="fa-solid fa-list-check text-3xl" />
					{:else}
						<i class="fa-solid fa-list-ol text-3xl" />
					{/if}
					<h2>{showIngredients ? 'Ingredients' : 'Steps'}</h2>
				</span>
				<button class="btn variant-filled-tertiary" on:click={toggle}
					>Show {showIngredients ? 'Steps' : 'Ingredients'}</button
				>
			</div>

			{#if showIngredients}
				<ul class="flex flex-col gap-4">
					{#each ingredients as ingredient}
						<li>
							<label class="flex items-center gap-5">
								<input class="sm:w-6 sm:h-6 w-7 h-7" type="checkbox" />
								<p>{ingredient}</p>
							</label>
						</li>
					{/each}
				</ul>

				<hr />
			{:else}
				<ol class="flex flex-col gap-4">
					{#each steps as step, i}
						<li>
							<article class="flex flex-col gap-4">
								<header class="m-auto">
									<h3>{`${i + 1}. ${step.title}`}</h3>
								</header>

								{#if step.instructions}
									<p>{step.instructions}</p>
								{/if}

								<ul class="flex flex-col gap-4">
									{#each step.ingredients as ingredient}
										<li>
											<label class="flex items-center gap-5">
												<input class="sm:w-6 sm:h-6 w-7 h-7" type="checkbox" />
												<p>{ingredient}</p>
											</label>
										</li>
									{/each}
								</ul>

								<hr />
							</article>
						</li>
					{/each}
				</ol>
			{/if}

			<span class="w-full flex justify-between">
				<p>Enjoy 😋</p>
				<a href="/">More recipes <i class="fa-solid fa-arrow-right" /></a>
			</span>
		</div>
	</div>
</section>

<section class="flex sm:flex-row flex-col gap-5">
	<header class="flex flex-col items-center gap-1 m-auto">
		<i class="fa-solid fa-book" />
		<h3>History</h3>
	</header>
	<span class="sm:w-2/3 gap-10 flex flex-col">
		<p>
			{description}
		</p>
	</span>
</section>
