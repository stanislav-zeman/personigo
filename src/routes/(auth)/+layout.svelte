<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let { children } = $props();

    let loggedIn = $state(false);

	onMount(() => {
		loggedIn = !!localStorage.getItem('session');
		loggedIn = false; // TODO: Properly set loggedIn variable.

		if (loggedIn) {
			goto('/');
		}
	});
</script>

{#if !loggedIn}
	{@render children()}
{/if}
