<script lang="ts">
	import type { PageProps } from './$types';
	import Grid from '$lib/components/data/Grid.svelte';

	let { data }: PageProps = $props();

	const columns = [
		{ headerName: 'ID', field: 'id' },
		{ headerName: 'Phrase ID', field: 'phrase_id' },
		{ headerName: 'Language ID', field: 'language_id' },
		{ headerName: 'Translation', field: 'translation' },
		{ headerName: 'Installation ID', field: 'installation_id' },
		{ headerName: 'Customization ID', field: 'customization_id' }
	];

	const rows = data.rows;
</script>

<div>
	<Grid columnDefs={columns} rowData={rows} />
</div>
