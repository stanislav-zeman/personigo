<script>
	import Grid from "$lib/components/Grid.svelte";

    const columns = [
        { headerName: 'ID', field: 'id' },
        { headerName: 'Name', field: 'name' },
        { headerName: 'Plural forms', field: 'pluralForms' },
        { headerName: 'Plural formula', field: 'pluralFormula' },
    ];

    const rows = [
        {
            id: 'cs',
            name: 'Czech',
            pluralForms: 3,
            pluralFormula: "N == 1 ? 0 : ((N > 1 && N < 5) ? 1 : 2)",
        },
        {
            id: 'sk',
            name: 'Slovak',
            pluralForms: 3,
            pluralFormula: "N == 1 ? 0 : ((N > 1 && N < 5) ? 1 : 2)",
        },
        {
            id: 'en',
            name: 'English',
            pluralForms: 2,
            pluralFormula: "N>1 ? 1 : 0",
        },
    ];
</script>

<h1>Languages</h1>

<Grid columnDefs={columns} rowData={rows} />
