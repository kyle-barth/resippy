<script lang="ts">
	import { intro } from '$lib/stores/intro';
	import { onMount } from 'svelte';
	import { expoOut as easing } from 'svelte/easing';
	import { fade, scale } from 'svelte/transition';
	import Icon from '../icon/icon.svelte';

	let boundingDiv: HTMLDivElement;

	let animateBounce = false;
	let animateBounceDuration = 750;

	const classes = 'w-screen h-screen absolute top-0 left-0';

	onMount(() => {
		animateBounce = true;

		setTimeout(() => {
			boundingDiv.style.opacity = '0';
			setTimeout(() => {
				boundingDiv.style.display = 'none';
				$intro = false;
			}, animateBounceDuration);
		}, animateBounceDuration);
	});
</script>

{#if $intro}
	<div
		bind:this={boundingDiv}
		class="{classes} z-[999] transition-all flex justify-center items-center variant-glass-secondary"
	>
		{#if animateBounce}
			<div transition:scale={{ duration: animateBounceDuration, opacity: 1, easing }}>
				<Icon scale="150" />
			</div>
		{/if}
	</div>

	{#if !animateBounce}
		<div class="{classes} z-[998] bg-black opacity-30" out:fade={{ duration: 250 }} />
	{/if}
{/if}
