import { faker } from '@faker-js/faker';
import Pocketbase from 'pocketbase'
import 'dotenv/config'
import { loginToPocketBase } from './loginToPocketBase';
import { buildFakeVolunteer } from './buildFakeVolunteer';
import { buildFakeMealRecipient } from './buildFakeMealRecipient';
import { buildFakeUser } from './buildFakeUser';

const NUM_VOLUNTEERS = 2
const NUM_MEAL_RECIPIENTS = 250
// const NUM_VOLUNTEERS = 100
// const NUM_MEAL_RECIPIENTS = 250

export default async function addFakeVolunteers() {

    const pb = new Pocketbase('http://127:0.0.1:8090')
    const auth = loginToPocketBase(pb)

    for (let v=0; v < NUM_VOLUNTEERS; v++) {
        const new_user = await pb.collection('user').create(buildFakeUser())
        const {id, email} = new_user
        await pb.collection('volunteer').create(buildFakeVolunteer({id,email}));
    }
    // for (let mr=0; mr < NUM_MEAL_RECIPIENTS; mr++) {
    //     const new_user = await pb.collection('user').create(buildFakeUser())
    //     const {id, email} = new_user
    //     await pb.collection('meal_recipient').create(buildFakeMealRecipient({id,email}));
    // }

}