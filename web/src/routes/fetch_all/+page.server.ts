
import { error } from '@sveltejs/kit';

export const load = ({ locals }) => {
	const getMealOrders = async () => {
		try {
			return structuredClone(await locals.pb.collection('meal_recipient').getList(1,50));
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		meal_recipient: getMealOrders()
	};
};