import 'dotenv/config'
const password = process.env.PB_MDHUTCHINGS94_PASSWORD ?? ''

export const loginToPocketBase = async (pb) => {
    
    const auth = await pb.admins.authWithPassword(
        'mdhutchings94@gmail.com',
        password
    )
    // const auth = await pb.collection('user').authWithPassword(
    //     'mdhutchings94@gmail.com',
    //     password
    // )
    return auth
}
