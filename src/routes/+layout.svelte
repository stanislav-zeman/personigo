<script lang="ts">
	import '../app.css';
    import Navigation from '$lib/components/navigation/Navigation.svelte'

	let { children } = $props();
</script>

<div class="flex">
    <Navigation/>
    <div class="flex-6">
        {@render children()}
    </div>
</div>
