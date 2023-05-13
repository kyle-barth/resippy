<script lang="ts">
	export let title: string;

	const hPosition = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
</script>

<span class="{hPosition} w-1/2 h-1/2 filter blur-xl bg-black opacity-30 rounded-full" />
<h1 class="{hPosition} text-center">
	{title}
</h1>
