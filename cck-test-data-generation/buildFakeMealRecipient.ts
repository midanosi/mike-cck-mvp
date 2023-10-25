import { faker} from '@faker-js/faker'

export const buildFakeMealRecipient = ({id,email}: {id: string, email: string}) => {
    const meal_recipient = {
        user: id,
        name: faker.person.fullName(),
        cck_name: faker.word.adjective(5) + '_' + faker.word.noun(6),
        phone_number: faker.phone.number(),
        email: email ?? faker.internet.email(),
        is_admin: faker.datatype.boolean(0.1),
        clean_interest: faker.datatype.boolean(0.3),
        cook_interest: faker.datatype.boolean(0.3),
        deliver_interest: faker.datatype.boolean(0.3),
        team_leader_interest: faker.datatype.boolean(0.1),
        admin_interest: faker.datatype.boolean(0.1),
        age: faker.helpers.enumValue({'16-17': '16-17', '18+': '18+'})
    }

    return meal_recipient
}