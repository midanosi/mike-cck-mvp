import { error } from '@sveltejs/kit';

export const load = ({ locals }) => {
	const getVolunteers = async () => {
		try {
			return structuredClone(await locals.pb.collection('volunteer').getList(1, 50));
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		volunteer: getVolunteers()
	};
};
