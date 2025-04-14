<script lang="ts">
	import '../app.css';
	import Menu from '$lib/components/navigation/Menu.svelte';
	import Navbar from '$lib/components/navigation/Navbar.svelte';

	let { children } = $props();

	let showMenu = $state(true);
</script>

<div class="flex flex-col">
	<Navbar bind:showMenu />
	<div class="flex flex-row">
		{#if showMenu}
			<Menu />
		{/if}
		<div class="flex-6">
			{@render children()}
		</div>
	</div>
</div>
