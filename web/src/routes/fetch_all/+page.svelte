<script lang="ts">
	export let data;
	console.log(`data.meal_recipient`, data.meal_recipient);
</script>

<div>
	<ul>
		{#each data.meal_recipient.items as meal_recipient}
			<li>{meal_recipient.delivery_address}</li>
		{/each}
	</ul>
</div>
