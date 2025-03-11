import { error } from '@sveltejs/kit';

export const actions = {
	password_reset: async ({ request, locals }) => {
		// const body = Object.fromEntries(await request.formData());
		// console.log(`locals.pb.user.email`, locals.pb.user.email)
		try {
			const passwordresetattempt = await locals.pb.admins.requestPasswordReset('mdhutchings94@gmail.com');
			console.log(`passwordresetattempt`, passwordresetattempt);
			// if (!locals.pb?.authStore?.model?.verified) {
			// 	locals.pb.authStore.clear();
			// 	return {
			// 		notVerified: true
			// 	};
			// }
			return true
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong during password reset');
		}

		// throw redirect(303, '/');
	}
};