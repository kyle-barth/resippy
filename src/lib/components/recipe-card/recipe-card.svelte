<script lang="ts">
	import CategoryIcon from '$lib/components/category-icon/category-icon.svelte';

	export let title: string;
	export let summary: string;
	export let category: string;
	export let src: string;
	export let slug: string;
</script>

<a class="card card-hover overflow-hidden" href="/recipes/{slug}">
	<header>
		<img {src} class="bg-black/50 w-full aspect-[6/4] object-cover" alt={title} />
	</header>
	<div class="p-4 space-y-4">
		<span>
			<CategoryIcon {category} />
			<h3>{title}</h3>
		</span>
		<article>
			<p>
				{summary}
			</p>
		</article>
	</div>
</a>
