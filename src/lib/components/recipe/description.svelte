<script lang="ts">
	export let description: string;
</script>

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
