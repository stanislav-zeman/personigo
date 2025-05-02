<script lang="ts">
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<p class="my-4 text-2xl">Personigo</p>
	<fieldset
		class="fieldset bg-base-200 border-base-300 rounded-box flex w-xs flex-col justify-center border p-4"
	>
		<legend class="fieldset-legend text-sm">Login</legend>

		<label class="label" for="email">Email</label>
		<input id="email" type="email" class="input" placeholder="Email" />

		<label class="label" for="password">Password</label>
		<input id="password" type="password" class="input" placeholder="Password" />

		<button class="btn btn-neutral mt-4">Login</button>
	</fieldset>
</div>
