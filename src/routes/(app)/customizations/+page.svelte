<script lang="ts">
	import type { PageProps } from './$types';
	import Grid from '$lib/components/data/Grid.svelte';

	let { data }: PageProps = $props();

	const columns = [
		{ headerName: 'ID', field: 'id' },
		{ headerName: 'Name', field: 'name' },
		{ headerName: 'Installation ID', field: 'installation_id' }
	];

	const rows = data.rows;
</script>

<Grid columnDefs={columns} rowData={rows} />
