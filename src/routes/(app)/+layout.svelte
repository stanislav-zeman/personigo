<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
	import Menu from '$lib/components/navigation/Menu.svelte';
	import Navbar from '$lib/components/navigation/Navbar.svelte';

	let { children } = $props();

	let showMenu = $state(true);

    onMount(() => {
		let loggedIn = !!localStorage.getItem('session');
        loggedIn = true

		// Redirect if not logged in and not already on /login
		if (!loggedIn && window.location.pathname !== '/login') {
			goto('/login');
		}
	});
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
