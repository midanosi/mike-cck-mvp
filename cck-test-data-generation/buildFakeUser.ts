import { faker} from '@faker-js/faker'

export const buildFakeUser = () => {
    const user = {
        email: faker.internet.email(),
        is_admin: faker.datatype.boolean(0.1),
    }

    return user
}