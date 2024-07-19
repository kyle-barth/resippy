<script>
	import { formSpacing, padding } from '$lib/helpers/page-spacing';
	import Icon from '../icon/icon.svelte';
</script>

<hr />

<footer class="{padding} {formSpacing} flex items-center flex-col sm:flex-row sm:justify-between">
	<div class="{formSpacing} flex flex-col items-center justify-center">
		<Icon scale="50" />
		<p>Thanks for visiting!</p>
	</div>

	<span class="{formSpacing} flex flex-col items-end">
		<p>
			Made by <a href="https://www.kyle-barth.dev" rel="noreferrer" target="_blank"
				>kyle-barth.dev</a
			>
		</p>
		<span class="text-2xl">🚀</span>
	</span>
</footer>
