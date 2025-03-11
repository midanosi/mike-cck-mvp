<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import '../app.postcss';
	export let data;
	console.log(`data.user`, data.user);
</script>

<div class="min-h-full">
	<nav class="navbar flex bg-base-100 border-b justify-between">
		<div>
			<a href="/" class="normal-case text-xl bg-orange-500 p-2 px-6 text-white"
				>CCK Project Radian</a
			>
		</div>
		<div class="h-2" />
		<div class="flex-none">
			{#if !data.user}
				<div class="mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex gap-4">
					<a href="/login" class="orange-300 hover:underline cursor-pointer">Login</a>
					<a href="/register" class="orange-300 hover:underline cursor-pointer">Register</a>
				</div>
			{:else}
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul tabindex="0" class="mt-3 p-2 shadow bg-base-100 rounded-box w-64 flex flex-col gap-2">
					<li>
						username: {data.user.username}
					</li>
					<li>
						email: {data.user.email}
						<!-- username {data.user.username} -->

						<!-- Volunteer name (TODO) {data.user.volunteer} -->
					</li>
					<li>
						<a href="/password_reset" class="gray-400 underline hover:gray-500 cursor-pointer"
							>Reset my Password</a
						>
					</li>
					<li>
						<form action="/logout" method="POST">
							<Button type="submit" class="w-full text-start">Logout</Button>
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

<style>
	a:hover {
		text-decoration: underline;
	}
	nav a {
		background: turquoise;
		background: rgb(249 115 22);
		color: white;
		border-radius: 4px;
		padding: 0.25rem;
	}
</style>
