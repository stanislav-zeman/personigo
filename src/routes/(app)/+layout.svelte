<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { Menu, Navbar } from '$lib/components/navigation';
	import { authTokenName } from '$lib/constants';

	let { children } = $props();

	let showMenu = $state(true);
	let loggedIn = $state(false);

	onMount(() => {
		loggedIn = !!localStorage.getItem(authTokenName);
		if (!loggedIn && window.location.pathname !== '/login') {
			goto('/login');
		}
	});
</script>

{#if loggedIn}
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
{/if}
