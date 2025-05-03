<script lang="ts">
	import { goto } from '$app/navigation';
	import { contentTypeJsonHeader, apiUrl, authTokenName } from '$lib/constants';

	let username: string;
	let password: string;

	let login = async () => {
		let res = await fetch(`${apiUrl}/auth/login`, {
			method: 'POST',
			body: JSON.stringify({
				username: username,
				password: password
			}),
			headers: contentTypeJsonHeader
		});

		if (res.ok) {
			let body = await res.json();
			localStorage.setItem(authTokenName, body.data.token);
			goto('/');
			return;
		}

		if (res.status === 400) {
			// TODO: Client error.
		}

		if (res.status === 401) {
			// TODO: Provided invalid login.
		}

		// TODO: Server error.
	};
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<p class="my-4 text-2xl">Personigo</p>
	<fieldset
		class="fieldset bg-base-200 border-base-300 rounded-box flex w-xs flex-col justify-center border p-4"
	>
		<legend class="fieldset-legend text-sm">Login</legend>

		<label class="label" for="username">Username</label>
		<input id="username" bind:value={username} type="text" class="input" placeholder="Username" />

		<label class="label" for="password">Password</label>
		<input
			id="password"
			bind:value={password}
			type="password"
			class="input"
			placeholder="Password"
		/>

		<button class="btn btn-neutral mt-4" on:click={login}>Login</button>
	</fieldset>
</div>
