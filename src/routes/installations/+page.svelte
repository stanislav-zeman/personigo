<script>
	import Grid from '$lib/components/data/Grid.svelte';

	const columns = [
		{ headerName: 'ID', field: 'id' },
		{ headerName: 'Phrase', field: 'phrase' },
		{ headerName: 'Language', field: 'language' },
		{ headerName: 'Translation', field: 'translation' },
		{ headerName: 'Installation', field: 'installation' },
		{ headerName: 'Customization', field: 'customization' }
	];

	const rows = [
		{
			id: '1',
			name: 'hello',
			language: 'English',
			translation: 'Hi'
		},
		{
			id: '2',
			name: 'hello',
			language: 'English',
			translation: 'Hi',
			installation: 'Televio'
		},
		{
			id: '3',
			name: 'hello',
			language: 'English',
			translation: 'Hi',
			installation: 'Televio',
			customization: 'Televio PL'
		},
		{
			id: '4',
			name: 'hello',
			language: 'Czech',
			translation: 'Ahoj'
		}
	];
</script>

<Grid columnDefs={columns} rowData={rows} />
