<script lang="ts">
	import { padding, spacing } from '$lib/helpers/page-spacing';
	import type { Step } from '$lib/types';
	import { combineIngredients } from '../../helpers/combine-ingredients';
	import Breadcrumbs from '../breadcrumbs/breadcrumbs.svelte';
	import Description from './description.svelte';
	import Header from './header.svelte';
	import Ingredients from './ingredients.svelte';
	import Instructions from './instructions.svelte';
	import Subheader from './subheader.svelte';

	export let title: string;
	export let description: string | undefined = undefined;
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

<Breadcrumbs {title} />

<section class="card overflow-hidden">
	<header class="relative flex items-center justify-center">
		<img
			class="opacity-80 w-full sm:aspect-[10/3] aspect-[6/3] object-cover h-full"
			{src}
			alt={title}
		/>

		<Header {title} />
	</header>

	<div class="{spacing} {padding} flex flex-col">
		<Subheader {showIngredients} {toggle} />

		{#if showIngredients}
			<Ingredients {ingredients} />
		{:else}
			<Instructions {steps} />
		{/if}

		<span class="w-full flex justify-between">
			<p>Enjoy 😋</p>
			<a href="/">More recipes <i class="fa-solid fa-arrow-right" /></a>
		</span>
	</div>
</section>

{#if description}
	<Description {description} />
{/if}
