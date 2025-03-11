import PocketBase from 'pocketbase';
import { redirect, type Handle } from '@sveltejs/kit';
import type { TypedPocketBase } from './pocketbase-types';

export const handle: Handle = async ({ event, resolve }) => {
	// event.locals.pb = new PocketBase('https://mike-cck-mvp.fly.dev')
	// event.locals.pb = new PocketBase('https://pocketbase-manual.mike-caprover-pocketbase-demo.uk') as TypedPocketBase
	event.locals.pb = new PocketBase('http://localhost:8090') as TypedPocketBase;
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = structuredClone(event.locals.pb.authStore.model);
		// console.log(`event.locals.user`, event.locals.user);

		// query volunteer row for matching user_id
		// const volunteer = await event.locals.pb.collection('volunteer').getList(1, 1, {
		// 	user_id: event.locals.user.id
		// });
		// if (volunteer) {
		// 	event.locals.user.volunteer = volunteer;
		// }
	} else {
		event.locals.user = undefined;
		if (!event.url.pathname.startsWith('/login')) {
			console.log('redirecting to login');
			throw redirect(303, '/login');
		}
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};

// export const handleError: HandleServerError = ({ error, event }) => {
// 	// example integration with https://sentry.io/
// 	// Sentry.captureException(error, { extra: { event } });

// 	return {
// 		message: error?.message ?? 'Whoops!',
// 		stack: error?.stack ?? '',
// 		code: error?.code ?? 'UNKNOWN',
// 	};
// };
