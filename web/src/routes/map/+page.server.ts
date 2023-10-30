

export const load = async ({locals}) => {
    const meal_recipient = await locals.pb.collection('meal_recipient').getList(1,101)

    return {
        meal_recipient
    }
}