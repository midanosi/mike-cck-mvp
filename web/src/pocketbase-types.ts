/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from 'pocketbase';
import { type RecordService } from 'pocketbase';

export enum Collections {
	DishOfTheDay = 'dish_of_the_day',
	MealRecipient = 'meal_recipient',
	Shift = 'shift',
	User = 'user',
	Volunteer = 'volunteer',
	VolunteerStats = 'volunteer_stats'
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString;
	created: IsoDateString;
	updated: IsoDateString;
	collectionId: string;
	collectionName: Collections;
	expand?: T;
};

export type AuthSystemFields<T = never> = {
	email: string;
	emailVisibility: boolean;
	username: string;
	verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export type DishOfTheDayRecord = {
	date?: IsoDateString;
	dish_1?: string;
	dish_1_ingredients?: string;
	dish_2?: string;
	dish_2_ingredients?: string;
};

export enum MealRecipientMethodToReceiveMealOptions {
	'delivery' = 'delivery',
	'pickup' = 'pickup'
}

export enum MealRecipientFieldOptions {
	'Thursday' = 'Thursday',
	'Sunday' = 'Sunday'
}
export type MealRecipientRecord = {
	allergens_intolerances?: string;
	cancellation_reason?: string;
	delivery_address?: string;
	email?: string;
	field?: MealRecipientFieldOptions[];
	method_to_receive_meal?: MealRecipientMethodToReceiveMealOptions;
	misc_delivery_instructions?: string;
	misc_notes?: string;
	name?: string;
	not_at_home_instructions?: string;
	notify_dish_of_the_day?: boolean;
	order_created_by?: RecordIdString;
	phone_number?: string;
	pluscode?: string;
	portions?: number;
	when_to_start_delivering?: IsoDateString;
	when_to_stop_delivering?: IsoDateString;
};

export type ShiftRecord = {
	cleaner_1?: RecordIdString;
	cleaner_2?: RecordIdString;
	cleaner_3?: RecordIdString;
	cook_1?: RecordIdString;
	cook_2?: RecordIdString;
	cook_3?: RecordIdString;
	cook_4?: RecordIdString;
	cook_reserve_1?: RecordIdString;
	cook_reserve_2?: RecordIdString;
	date?: IsoDateString;
	dish_of_the_day?: RecordIdString;
	irl_coordinator?: RecordIdString[];
	kitchen_team_lead?: RecordIdString;
	remote_coordinator?: RecordIdString[];
	rider_arbury?: RecordIdString[];
	rider_barnwell?: RecordIdString[];
	rider_cherry_hinton?: RecordIdString[];
	rider_reserver_1?: RecordIdString[];
	rider_reserver_2?: RecordIdString[];
};

export type UserRecord = {
	is_cck_admin?: boolean;
};

export enum VolunteerAgeOptions {
	'16-17' = '16-17',
	'18+' = '18+'
}
export type VolunteerRecord = {
	admin_interest?: boolean;
	age?: VolunteerAgeOptions;
	cck_name?: string;
	clean_interest?: boolean;
	cook_interest?: boolean;
	cook_team_lead_interest?: boolean;
	deliver_interest?: boolean;
	email?: string;
	is_cck_admin?: boolean;
	name?: string;
	notes?: string;
	phone_number?: number;
	user?: RecordIdString;
};

export type VolunteerStatsRecord = {
	deliver_count?: number;
};

// Response types include system fields and match responses from the PocketBase API
export type DishOfTheDayResponse<Texpand = unknown> = Required<DishOfTheDayRecord> &
	BaseSystemFields<Texpand>;
export type MealRecipientResponse<Texpand = unknown> = Required<MealRecipientRecord> &
	BaseSystemFields<Texpand>;
export type ShiftResponse<Texpand = unknown> = Required<ShiftRecord> & BaseSystemFields<Texpand>;
export type UserResponse<Texpand = unknown> = Required<UserRecord> & AuthSystemFields<Texpand>;
export type VolunteerResponse<Texpand = unknown> = Required<VolunteerRecord> &
	BaseSystemFields<Texpand>;
export type VolunteerStatsResponse<Texpand = unknown> = Required<VolunteerStatsRecord> &
	BaseSystemFields<Texpand>;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	dish_of_the_day: DishOfTheDayRecord;
	meal_recipient: MealRecipientRecord;
	shift: ShiftRecord;
	user: UserRecord;
	volunteer: VolunteerRecord;
	volunteer_stats: VolunteerStatsRecord;
};

export type CollectionResponses = {
	dish_of_the_day: DishOfTheDayResponse;
	meal_recipient: MealRecipientResponse;
	shift: ShiftResponse;
	user: UserResponse;
	volunteer: VolunteerResponse;
	volunteer_stats: VolunteerStatsResponse;
};

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'dish_of_the_day'): RecordService<DishOfTheDayResponse>;
	collection(idOrName: 'meal_recipient'): RecordService<MealRecipientResponse>;
	collection(idOrName: 'shift'): RecordService<ShiftResponse>;
	collection(idOrName: 'user'): RecordService<UserResponse>;
	collection(idOrName: 'volunteer'): RecordService<VolunteerResponse>;
	collection(idOrName: 'volunteer_stats'): RecordService<VolunteerStatsResponse>;
};
