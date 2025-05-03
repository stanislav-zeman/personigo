<script lang="ts">
	import type { PageProps } from './$types';
	import Grid from '$lib/components/data/Grid.svelte';

	let { data }: PageProps = $props();

	const columns = [
		{ headerName: 'ID', field: 'id' },
		{ headerName: 'Phrase', field: 'phrase' }
	];

	const rows = data.rows;
</script>

<Grid columnDefs={columns} rowData={rows} />
