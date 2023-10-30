

export const load = async ({locals}) => {
    const meal_recipient = await locals.pb.collection('shift').getList(1,10)

    return {
        meal_recipient
    }
}