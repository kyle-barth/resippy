<script lang="ts">
	import { intro } from '$lib/stores/intro';
	import { onMount } from 'svelte';
	import { expoOut as easing } from 'svelte/easing';
	import { fade, scale } from 'svelte/transition';
	import Icon from '../icon/icon.svelte';

	let animateBounce = false;
	let animateBounceDuration = 500;

	const classes = 'w-screen h-screen absolute top-0 left-0';

	let initialFade = true;
	const fadeDuration = 250;

	const introExitDelay = 350;

	onMount(() => {
		initialFade = false;

		setTimeout(() => {
			animateBounce = true;

			setTimeout(() => {
				$intro = false;
			}, animateBounceDuration + introExitDelay);
		}, fadeDuration);
	});
</script>

{#if $intro}
	{#if initialFade}
		<div class="{classes} z-[999] bg-black" out:fade={{ duration: fadeDuration }} />
	{/if}

	<div
		out:fade={{ duration: fadeDuration }}
		class="{classes} z-[998] transition-all flex justify-center items-center variant-glass-secondary"
	>
		{#if animateBounce}
			<div
				transition:scale={{
					duration: animateBounceDuration,
					opacity: 1,
					easing,
					delay: fadeDuration
				}}
			>
				<Icon scale="150" />
			</div>
		{/if}
	</div>
{/if}
