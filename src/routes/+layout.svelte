<script lang="ts">
	import '../app.css';
	import Menu from '$lib/components/navigation/Menu.svelte';
	import Navbar from '$lib/components/navigation/Navbar.svelte';

	let { children } = $props();
</script>

<div class="flex flex-col">
	<Navbar />
	<div class="flex flex-row">
		<Menu />
		<div class="flex-6">
			{@render children()}
		</div>
	</div>
</div>
