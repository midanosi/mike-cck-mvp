import { error, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		console.log(`body`, body);
		console.log(`body.email`, body.email);
		console.log(`body.password`, body.password);

		try {
			// TODO auto-detect if logging in as an admin or not
			await locals.pb.collection('user').authWithPassword(body.email, body.password);
			// await locals.pb.admins.authWithPassword(body.email, body.password);

			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
			redirect(302, '/');
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong logging in');
		}

		// throw redirect(303, '/');
	}
};
