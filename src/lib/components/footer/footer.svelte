<script>
	import { formSpacing, padding } from '$lib/helpers/page-spacing';
	import Icon from '../icon/icon.svelte';
</script>

<hr />

<footer class="{padding} {formSpacing} flex items-center flex-col sm:flex-row sm:justify-between">
	<div class="{formSpacing} flex flex-col items-center justify-center">
		<Icon scale="75" />
		<p>Thanks for visiting!</p>
	</div>

	<p>
		Made by <a href="https://kyle-barth.dev" rel="noreferrer" target="_blank">kyle-barth.dev</a> 🚀
	</p>
</footer>
