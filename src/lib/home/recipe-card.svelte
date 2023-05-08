<script lang="ts">
	export let title: string;
	export let description: string;
	export let img: string;
	export let slug: string;
</script>

<a class="card card-hover overflow-hidden" href="/recipes/{slug}">
	<header>
		<img src={img} class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
	</header>
	<div class="p-4 space-y-4">
		<h3 data-toc-ignore>{title}</h3>
		<article>
			<p>
				{description}
			</p>
		</article>
	</div>
	<hr class="opacity-50" />
</a>
