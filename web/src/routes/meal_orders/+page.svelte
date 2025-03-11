<script lang="ts">
	export let data;
	console.log(`data.meal_recipient`, data.meal_recipient);
</script>

<div>
	<table>
		<thead>
			<tr>
				<td> address </td>
				<td> pluscode </td>
				<td> portions </td>
				<td> allergens_intolerances </td>
				<td> name </td>
				<td> email </td>
				<td> phone number </td>
				<td> delivery/pickup </td>
				<td> which days (0-6 Sun->Sat)</td>
				<td> not at home instructions </td>
				<td> rider generated notes </td>
			</tr>
		</thead>
		<tbody>
			{#each data.meal_recipient.items as meal_recipient}
				<tr>
					<td>
						{meal_recipient.delivery_address}
					</td>
					<td>
						{meal_recipient.pluscode}
					</td>
					<td>
						{meal_recipient.portions}
					</td>
					<td>
						{meal_recipient.allergens_intolerances}
					</td>
					<td>
						{meal_recipient.name}
					</td>
					<td>
						{meal_recipient.email}
					</td>
					<td>
						{meal_recipient.phone_number}
					</td>
					<td>
						{meal_recipient.method_to_receive_meal}
					</td>
					<td>
						{meal_recipient.days}
					</td>
					<td>
						{meal_recipient.not_at_home_instructions}
					</td>
					<td>
						{meal_recipient.misc_notes}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table {
		table-layout: fixed;
	}
	table thead tr td {
		align-self: baseline;
	}
	table tbody tr td {
		white-space: nowrap;
	}
	table td {
		border: 1px solid;
	}
</style>
