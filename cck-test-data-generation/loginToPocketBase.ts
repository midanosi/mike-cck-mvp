import Pocketbase from 'pocketbase'


export const loginToPocketBase = (pb) => {
    const password: string = process.env.PB_MDHUTCHINGS94_PASSWORD ?? ''
    
    const auth = pb.collection('user').authWithPassword(
        'mdhutchings94@gmail.com',
        password
    )
    return auth
}
