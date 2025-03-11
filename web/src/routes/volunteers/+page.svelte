<script lang="ts">
	export let data;
	console.log(`data.volunteer`, data.volunteer);
</script>

<div>
	<ul>
		{#each data.volunteer.items as volunteer}
			<li>{volunteer.name}</li>
		{/each}
	</ul>
</div>
