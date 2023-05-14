<script lang="ts">
	import { page } from '$app/stores';
	import { spacing } from '$lib/helpers/page-spacing';
</script>

<div class="max-w-lg m-auto">
	<article class="{spacing} flex flex-col items-center justify-center">
		<h1 class="text-center">Not sure what happened there...</h1>
		<p>{$page.status}: {$page.error?.message}</p>

		<a class="unstyled btn variant-ringed-primary gap-2" href="/">
			Go back to all recipes
			<i class="fa-solid fa-arrow-right" />
		</a>
	</article>
</div>
