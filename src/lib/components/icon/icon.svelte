<script lang="ts">
	type IconSizes = '50' | '75' | '100' | '125' | '150';
	export let scale: IconSizes = '100';

	const sizes: { [key in IconSizes]: string } = {
		50: 'scale-50 -my-5 -mx-8',
		75: 'scale-75 -my-2 -mx-4',
		100: 'scale-100',
		125: 'scale-125 my-3 mx-4',
		150: 'scale-150 my-5 mx-8'
	};
</script>

<a
	class="{sizes[
		scale
	]} transform unstyled hover:cursor-pointer flex flex-col items-center border-2 rounded px-2 py-1 border-dashed"
	href="/"
>
	<span class="flex items-center justify-center gap-2 -mb-2">
		<i class="fa-solid fa-utensils xs:text-2xl text-xl" />
		<img class="w-10 h-10" src="/favicon.png" alt="Resippy" />
		<i class="fa-solid fa-martini-glass-citrus xs:text-2xl text-xl" />
	</span>

	<span class="xs:text-4xl text-3xl font-semibold">Resippy</span>
</a>
