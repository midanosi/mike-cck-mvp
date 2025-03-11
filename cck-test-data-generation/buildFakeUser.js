import { faker } from '@faker-js/faker/locale/en_GB';

export const buildFakeUser = () => {
    const user = {
        email: faker.internet.email(),
        is_cck_admin: faker.datatype.boolean(0.1),
        password: 'password',
        passwordConfirm: 'password',
    }

    return user
}