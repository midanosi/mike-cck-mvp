// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User
			pb: PocketBase
		}
		// interface PageData {}
		// interface Platform {}
	}
}
type PocketBaseThing = boolean // TODO
type User = boolean // TODO



export {};
