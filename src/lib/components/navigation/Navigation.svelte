<script lang="ts">
    import { Icon, Home, Languages,  FolderCog, Folder, BookA, CaseSensitive, } from "lucide-svelte";

    type Item = {
        name: string;
        path: string;
        icon: typeof Icon;
    }

    const items: Item[] = [
        {
            name: 'Home',
            path: '/',
            icon: Home,
        },
        {
            name: 'Installations',
            path: '/installations',
            icon: Folder,
        },
        {
            name: 'Customizations',
            path: '/customizations',
            icon: FolderCog,
        },
        {
            name: 'Languages',
            path: '/languages',
            icon: Languages,
        },
        {
            name: 'Phrases',
            path: '/phrases',
            icon: CaseSensitive,
        },
        {
            name: 'Translations',
            path: '/translations',
            icon: BookA,
        },
    ]
</script>

<nav class="flex flex-1 flex-col">
    <h1>Personigo</h1>
    {#each items as item}
        {@const Icon = item.icon}
        <a href={item.path}>
            <Icon />
            <span>{item.name}</span>
        </a>
    {/each}
</nav>
