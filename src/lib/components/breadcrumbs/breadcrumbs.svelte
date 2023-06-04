<script lang="ts">
	export let title: string;
</script>

<nav aria-label="breadcrumbs">
	<ul class="flex gap-2 items-center justify-center font-bold">
		<li>
			<a href="/" class="unstyled text-white underline">Home</a>
		</li>
		<li>
			<i class="fa-solid fa-angle-right" />
		</li>
		<li class="text-lg">{title}:</li>
	</ul>
</nav>
