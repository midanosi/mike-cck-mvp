<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import Label from '$lib/components/ui/label/label.svelte';
	// import * as Card from '$lib/components/ui/card';
	import { formSchema, type FormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';

	// import FormCard from './FormCard.svelte';

	export let form: SuperValidated<FormSchema>;

	const sections = ['info', 'cleaning', 'delivery', 'cooking'];
</script>

<h1 class="text-2xl mb-4">New volunteer signup</h1>
<p>Thank you for offering your time to volunteer for Cambridge Community Kitchen!</p>
<p>We have three types of volunteering shifts:</p>
<ul class="mb-4">
	<li>DEEP CLEANING (Thursday, Sunday, <b>6:30-7:30pm</b>)</li>
	<li>COOKING (Thursday,Sunday, <b>3-7pm</b>)</li>
	<li>DELIVERY (Thursday, Sunday, <b>6-8pm</b>)</li>
</ul>
<p class="mb-4">
	We also have a variety of ongoing ADMIN tasks which can all be done from home. Please answer the
	following questions so we can understand how you would like to contribute.
</p>

<!-- <p class="mb-4">
	**If you're here for Christmas Day only, please fill in the form as normal and choose the "just
	for Christmas" option**
</p> -->

<Form.Root method="POST" {form} schema={formSchema} let:config class="space-y-12">
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label for="name">Your name <span class="text-red-500">*</span></Form.Label>
			<Form.Input
				name="name"
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full max-w-xs"
				required
			/>
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="cck_name">
		<Form.Item>
			<Form.Label>CCK Name <span class="text-red-500">*</span></Form.Label>
			<Form.Description
				>This needs to be unique among our volunteers, so we know who's actually on the rota! Just
				"Sam" or "Alice" won't do. Think along the lines of "Sam T" or "HJM" or "Bumblebee" or
				"Jimz" etc.
			</Form.Description>
			<Form.Input
				type="text"
				placeholder="Your CCK Name"
				class="input input-bordered w-full max-w-xs"
				required
			/>
		</Form.Item>
	</Form.Field>

	<Form.Field {config} name="phone_number">
		<Form.Item>
			<Form.Label>Phone Number <span class="text-red-500">*</span></Form.Label>
			<Form.Input
				type="number"
				placeholder="+447501333333"
				class="input input-bordered w-full max-w-xs"
				required
			/>
			<Form.Validation />
		</Form.Item>
	</Form.Field>

	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>Email address<span class="text-red-500">*</span></Form.Label>
			<Form.Input
				type="email"
				placeholder="emailaddress@fake.com"
				class="input input-bordered w-full max-w-xs"
			/>
			<Form.Validation />
		</Form.Item>
	</Form.Field>

	<Form.Field {config} name="cleaning">
		<Form.Item>
			<Form.Label>Interested in cleaning? <span class="text-red-500">*</span> 🧹</Form.Label>
			<Form.Description class="mb-2">(Thursdays, Sundays, 6:30pm-7:30pm)</Form.Description>
			<Form.RadioGroup>
				<Form.Item class="flex items-center gap-2">
					<Form.RadioItem id="cleaning-yes" value="yes" />
					<Label for="cleaning-yes">Yes</Label>
				</Form.Item>
				<Form.Item class="flex items-center gap-2">
					<Form.RadioItem id="cleaning-no" value="no" />
					<Label for="cleaning-no">No</Label>
				</Form.Item>
			</Form.RadioGroup>
		</Form.Item>
	</Form.Field>

	<Form.Field {config} name="delivery">
		<Form.Item>
			<Form.Label>Interested in delivery? <span class="text-red-500">*</span> 🚲</Form.Label>
			<Form.Description class="mb-2">(Thursdays, Sundays, 6:00pm-8:00pm)</Form.Description>

			<Form.RadioGroup>
				<Form.Item class="flex items-center gap-2">
					<Form.RadioItem id="delivery-yes" value="yes" />
					<Label for="delivery-yes">Yes</Label>
				</Form.Item>
				<Form.Item class="flex items-center gap-2">
					<Form.RadioItem id="delivery-no" value="no" />
					<Label for="delivery-no">No</Label>
				</Form.Item>
			</Form.RadioGroup>
		</Form.Item>
	</Form.Field>

	<Form.Field {config} name="cooking">
		<Form.Item>
			<Form.Label>Interested in cooking? <span class="text-red-500">*</span> 🥕</Form.Label>
			<Form.Description class="mb-2">(Thursday, Sunday, 3:00pm-7:00pm)</Form.Description>

			<Form.RadioGroup>
				<Form.Item class="flex items-center gap-2">
					<Form.RadioItem id="cooking-yes" value="yes" />
					<Label for="cooking-yes">Yes</Label>
				</Form.Item>
				<Form.Item class="flex items-center gap-2">
					<Form.RadioItem id="cooking-no" value="no" />
					<Label for="cooking-no">No</Label>
				</Form.Item>
			</Form.RadioGroup>
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="admin">
		<Form.Item>
			<Form.Label>Interested in admin? <span class="text-red-500">*</span> 🥕</Form.Label>
			<Form.Description class="mb-2">(TODO copy text in)</Form.Description>

			<Form.RadioGroup>
				<div class="flex items-center gap-2">
					<Form.RadioItem id="admin-yes" value="yes" />
					<Label for="admin-yes">Yes</Label>
				</div>
				<div class="flex items-center gap-2">
					<Form.RadioItem id="admin-no" value="no" />
					<Label for="admin-no">No</Label>
				</div>
			</Form.RadioGroup>
		</Form.Item>
	</Form.Field>

	<Form.Button>Submit</Form.Button>
</Form.Root>

<!-- </form> -->

<style>
	/* input {
		cursor: pointer;
	} */
	p {
		font-size: 0.8rem;
		opacity: 0.8;
	}
	label {
		position: relative;
		width: fit-content;
	}
	ul li {
		list-style-type: disc;
		margin-left: 1rem;
		font-size: 0.8rem;
		opacity: 0.8;
	}
</style>
