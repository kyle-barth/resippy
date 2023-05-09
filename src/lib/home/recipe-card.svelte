<script lang="ts">
	import RecipeIcon from '$lib/helpers/recipe-icon.svelte';

	export let title: string;
	export let description: string;
	export let category: string;
	export let img: string;
	export let slug: string;
</script>

<a class="card card-hover overflow-hidden" href="/recipes/{slug}">
	<header>
		<img src={img} class="bg-black/50 w-full aspect-[6/4] object-cover" alt="Post" />
	</header>
	<div class="p-4 space-y-4">
		<span>
			<RecipeIcon {category} />
			<h3>{title}</h3>
		</span>
		<article>
			<p>
				{description}
			</p>
		</article>
	</div>
</a>
