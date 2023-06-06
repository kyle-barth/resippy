<script>
	import Icon from '../icon/icon.svelte';
	import PageLayout from '../page-layout/page-layout.svelte';
	import PositionHeader from './position-header.svelte';
	import Search from './search.svelte';
</script>

<PositionHeader />

<PageLayout>
	<div class="flex justify-between items-center">
		<Icon scale="75" />
		<Search />
	</div>
</PageLayout>
