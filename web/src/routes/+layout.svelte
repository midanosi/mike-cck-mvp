<script>
	import '../app.postcss';
	export let data;
	console.log(`data.user`, data.user)
</script>

<div class="min-h-full">
	<nav class="navbar bg-base-100 border-b">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">de-googlified CCK mvp app</a>
		</div>
		<div class="flex-none">
			{#if !data.user}
				<div class="mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex gap-4">
					<a href="/login" class="btn btn-primary">Login</a>
					<a href="/register" class="btn btn-secondary">Register</a>
				</div>
			{:else}
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex gap-4"
				>
					<li>
						Logged in as: {data.user.username}
						volunteer name {data.user.volunteer?.name}
					</li>
					<li>
						<form action="/logout" method="POST">
							<button type="submit" class="w-full text-start">Logout</button>
						</form>
					</li>
				</ul>
			{/if}
		</div>
	</nav>
	<div class="py-10">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<slot />
		</div>
	</div>
</div>
