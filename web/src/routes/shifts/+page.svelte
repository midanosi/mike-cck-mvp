<script lang="ts">
	export let data;
	console.log(`data.shifts`, data.shifts);
</script>

<h1>shifts</h1>
<div>
	<ul>
		{#each data.shifts.items as shifts}
			<li>{shifts.date}</li>
		{/each}
	</ul>
</div>
