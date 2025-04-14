<script lang="ts">
	import { ChevronLeft, ChevronRight, Moon, Settings, Sun } from 'lucide-svelte';

	let { showMenu = $bindable() } = $props();
</script>

<div class="navbar bg-base-100 shadow-sm">
	<label class="btn btn-circle swap swap-rotate">
		<input type="checkbox" bind:checked={showMenu} />
		<ChevronRight class="swap-off" />
		<ChevronLeft class="swap-on" />
	</label>
	<div class="flex-1">
		<p class="mx-2 text-xl">Personigo</p>
	</div>
	<div>
		<label class="flex cursor-pointer gap-2">
			<Moon />
			<input type="checkbox" value="emerald" class="toggle theme-controller" />
			<Sun />
		</label>
	</div>
	<div class="flex-none pl-8">
		<button class="btn btn-square btn-ghost">
			<a href="/settings">
				<Settings />
			</a>
		</button>
	</div>
</div>
