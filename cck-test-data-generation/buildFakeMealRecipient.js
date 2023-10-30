import { faker } from '@faker-js/faker/locale/en_GB';
import pluscodes from 'pluscodes'
const { encode } = pluscodes

export const buildFakeMealRecipient = ({id,email}) => {
    const random_cambridge_location = faker.location.nearbyGPSCoordinate({origin: [52.205243,0.1277719], radius: 4, isMetric: true})
    const pluscode = encode({latitude: random_cambridge_location[0], longitude: random_cambridge_location[1]})

    const meal_recipient = {
        user: id,
        name: faker.person.firstName() + ' ' + faker.person.lastName(),
        cck_name: faker.word.adjective(5) + '_' + faker.word.noun(6),
        phone_number: faker.phone.number('+#############'),
        email: email ?? faker.internet.email(),
        method_to_receive_meal: faker.helpers.enumValue({'pickup': 'pickup', 'delivery': 'delivery'}),
        delivery_address: faker.location.streetAddress(),
        pluscode: pluscode,
        portions: 2,
        allergens_intolerances: '2xNo Beans',
        would_like_meal_on_these_days: ["Thursday",'Sunday'],
        not_at_home_instructions: 'Porch',
        misc_delivery_instructions: 'leave in corner',
        misc_notes: 'added by Mike on behalf of them',
        when_to_start_delivering: "2023-10-26 00:00:00.000Z",
        when_to_stop_delivering: null,
        notify_dish_of_the_day: faker.datatype.boolean(),
        cancellation_reason: '',
    }

    return meal_recipient
}