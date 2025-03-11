<script lang="ts">
	export let form;
</script>

<div class="flex h-full w-full flex-col items-center">
	<h2 class="mt-2 text-center text-3xl font-bold">Login to your account</h2>
	<p class="mt-1 text-center">
		Or <a href="/register">register</a> if you haven't already got an account
	</p>
	<form action="?/login" method="POST" class="flex w-full flex-col items-center space-y-2 pt-4">
		<div>
			<label for="email">Email</label>
			<input type="email" name="email" class="border-2" />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" name="password" class="border-2" />
		</div>
		<div>
			<button type="submit" class="bg-blue-400 px-2 text-white">Login</button>
		</div>
		<br class="h-8" />
		<aside class="p-2 bg-gray-300">
			Eryn99@yahoo.com<br />
			password
		</aside>
		{#if form?.notVerified}
			<div class="alert alert-error w-full max-w-md shadow-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 flex-shrink-0 stroke-current"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>You must verify your email before you can login.</span>
				</div>
			</div>
		{/if}
	</form>
</div>
