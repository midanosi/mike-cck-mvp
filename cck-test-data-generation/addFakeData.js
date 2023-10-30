import Pocketbase from 'pocketbase'
import { loginToPocketBase } from './loginToPocketBase.js';
import { buildFakeVolunteer } from './buildFakeVolunteer.js';
import { buildFakeMealRecipient } from './buildFakeMealRecipient.js';
import { buildFakeUser } from './buildFakeUser.js';

const NUM_VOLUNTEERS = 2
const NUM_MEAL_RECIPIENTS = 2
// const NUM_VOLUNTEERS = 100
// const NUM_MEAL_RECIPIENTS = 250

export default async function addFakeVolunteers() {
    console.log('in addfakevolunteers')

    const pb = new Pocketbase('http://127.0.0.1:8090')
    let auth
    try {
        auth = await loginToPocketBase(pb)

    } catch(e) {
        console.log(`e`, e)
    }
    console.log(`auth`, auth)

    for (let v=0; v < NUM_VOLUNTEERS; v++) {
        const new_user = await pb.collection('user').create(buildFakeUser())
        console.log(`new_user`, new_user)
        const {id, email} = new_user
        await pb.collection('volunteer').create(buildFakeVolunteer({id,email}));
    }
    // for (let mr=0; mr < NUM_MEAL_RECIPIENTS; mr++) {
    //     const new_user = await pb.collection('user').create(buildFakeUser())
    //     const {id, email} = new_user
    //     await pb.collection('meal_recipient').create(buildFakeMealRecipient({id,email}));
    // }
}
addFakeVolunteers()