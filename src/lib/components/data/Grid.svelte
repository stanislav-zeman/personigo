<script lang="ts" generics="TRow">
	import { createGrid, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
	import type { ColDef, GridOptions } from 'ag-grid-community';
	import { AllEnterpriseModule } from 'ag-grid-enterprise';
	import { onMount } from 'svelte';

	ModuleRegistry.registerModules([AllCommunityModule, AllEnterpriseModule]);

	let gridDiv: HTMLDivElement;

	let {
		columnDefs,
		rowData
	}: {
		columnDefs: Array<ColDef>;
		rowData: Array<TRow>;
	} = $props();

	const gridOptions: GridOptions<TRow> = {
		columnDefs,
		rowData,
		rowSelection: {
			mode: 'multiRow'
		},
		defaultColDef: {
			sortable: true,
			filter: true
		},
		autoSizeStrategy: {
			type: 'fitCellContents'
		}
	};

	onMount(() => {
		createGrid(gridDiv, gridOptions);
	});
</script>

<div bind:this={gridDiv} class="m-6 h-svh"></div>
