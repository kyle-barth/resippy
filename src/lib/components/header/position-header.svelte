<!-- Used to position navbar on mobile apps -->
<div class="app-navbar-notch variant-glass-secondary" />

<style lang="postcss">
	.app-navbar-notch {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		height: 500px;
		transform: translateY(calc(env(safe-area-inset-top) - 500px));
		margin-bottom: calc(env(safe-area-inset-top) - 500px);
		z-index: 998;
	}
</style>
