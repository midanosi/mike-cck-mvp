<script lang="ts">
	export let data;
	console.log(`data.meal_orders`, data.meal_orders);
</script>

<div>
	<ul>
		{#each data.meal_orders.items as meal_order}
			<li>{meal_order.address}</li>
		{/each}
	</ul>
</div>
