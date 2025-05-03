<script lang="ts">
	import { Icon, Home, Languages, FolderCog, Folder, BookA, CaseSensitive } from 'lucide-svelte';

	type Item = {
		name: string;
		path: string;
		icon: typeof Icon;
	};

	const items: Item[] = [
		{
			name: 'Home',
			path: '/',
			icon: Home
		},
		{
			name: 'Installations',
			path: '/installations',
			icon: Folder
		},
		{
			name: 'Customizations',
			path: '/customizations',
			icon: FolderCog
		},
		{
			name: 'Languages',
			path: '/languages',
			icon: Languages
		},
		{
			name: 'Phrases',
			path: '/phrases',
			icon: CaseSensitive
		},
		{
			name: 'Translations',
			path: '/translations',
			icon: BookA
		}
	];
</script>

<nav class="flex max-w-48 flex-1 flex-col">
	<ul class="menu">
		{#each items as item (item.name)}
			{@const Icon = item.icon}
			<li>
				<a href={item.path}>
					<Icon />
					<span>{item.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
