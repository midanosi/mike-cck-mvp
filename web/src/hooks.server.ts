import PocketBase from 'pocketbase'
import type { Handle } from '@sveltejs/kit'
import { serializeNonPOJOs } from '$lib/utils'

export const handle: Handle = async ({ event, resolve}) => {
    // event.locals.pb = new PocketBase('https://mike-cck-mvp.fly.dev') // TODO install https://github.com/david-plugge/typed-pocketbase
    event.locals.pb = new PocketBase('http://localhost:8090') // TODO install https://github.com/david-plugge/typed-pocketbase
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

    event.locals.user = undefined
    if (event.locals.pb.authStore.isValid) {
        event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model)
    }
    const response = await resolve(event)

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({secure: false}))
    
    return response
}