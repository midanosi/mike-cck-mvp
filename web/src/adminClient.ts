// src/adminClient.js
import PocketBase from 'pocketbase';
const password = process.env.PB_MDHUTCHINGS94_PASSWORD ?? '';

const adminClient = new PocketBase(process.env.dbURL);

await adminClient.admins.authWithPassword('mdhutchings94@gmail.com', password, {
	// This will trigger auto refresh or auto reauthentication in case
	// the token has expired or is going to expire in the next 30 minutes.
	autoRefreshThreshold: 30 * 60
});

export default adminClient;
