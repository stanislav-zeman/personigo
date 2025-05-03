<script lang="ts">
	import type { PageProps } from './$types';
	import Grid from '$lib/components/data/Grid.svelte';

	let { data }: PageProps = $props();

	const columns = [
		{ headerName: 'ID', field: 'id' },
		{ headerName: 'Name', field: 'name' },
		{ headerName: 'Plural forms', field: 'plural_forms' },
		{ headerName: 'Plural formula', field: 'plural_formula' }
	];

	const rows = data.rows;
</script>

<Grid columnDefs={columns} rowData={rows} />
