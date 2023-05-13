<script lang="ts">
	export let text: string;
</script>

<label class="flex items-center gap-5">
	<input class="sm:w-6 sm:h-6 w-9 h-9" type="checkbox" />
	<p>{text}</p>
</label>
