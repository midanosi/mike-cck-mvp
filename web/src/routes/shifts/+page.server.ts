import { error, redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	const getShifts = async () => {
		try {
			return structuredClone(await locals.pb.collection('shift').getList(1, 50));
		} catch (err) {
			console.log('Error: ', err);
			// throw error(err.status, err.message);
		}
	};

	return {
		shifts: getShifts()
	};
};
