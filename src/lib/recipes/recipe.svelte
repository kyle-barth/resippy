<script lang="ts">
	import type { Step } from '$lib/types';

	export let title: string;
	export let description: string;
	export let src: string;
	export let steps: Step[];
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
			<span class="flex gap-4 items-center justify-center">
				<i class="fa-solid fa-list-ol text-3xl" />
				<h2>Steps</h2>
			</span>

			<ol class="flex flex-col gap-4">
				{#each steps as step, i}
					<li>
						<article class="flex flex-col gap-4">
							<header>
								<h3>{`${i + 1}. ${step.title}`}</h3>
							</header>
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
						</article>
					</li>
				{/each}
			</ol>

			<hr />

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
