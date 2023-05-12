<script lang="ts">
	export let title: string;

	const hPosition = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
</script>

<h1 class="{hPosition} opacity-100 filter blur-md text-center text-black">
	{title}
</h1>
<h1 class="{hPosition} text-center drop-shadow-lg">
	{title}
</h1>
