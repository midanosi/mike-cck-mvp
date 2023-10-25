
import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = ({ locals }) => {
	const getMealOrders = async () => {
		try {
			return serializeNonPOJOs(await locals.pb.collection('meal_orders').getList(1,50));
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		meal_orders: getMealOrders()
	};
};