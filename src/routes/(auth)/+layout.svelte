<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { authTokenName } from '$lib/constants';

	let { children } = $props();

	let loggedIn = $state(false);

	onMount(() => {
		loggedIn = !!localStorage.getItem(authTokenName);
		if (loggedIn) {
			goto('/');
		}
	});
</script>

{#if !loggedIn}
	{@render children()}
{/if}
