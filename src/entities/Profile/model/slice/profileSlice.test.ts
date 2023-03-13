import { profileActions, profileReducer, profileSlice } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../../model/types/profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from 'entities/Profile';

const data = {
	first: 'first',
	lastname: 'lastname',
	age: 20,
	currency: Currency.RUB,
	country: Country.Russia,
	city: 'Moscow',
	username: 'username',
	avatar: 'https://dic.academic.ru/pictures/wiki/files/77/Melvin_van_Horne.png',
};

describe('profileSlice', () => {
	test('test set readonly', () => {
		const state: DeepPartial<ProfileSchema> = { readonly: false };

		expect(profileReducer(
			state as ProfileSchema,
			profileActions.setReadonly(true),
		)).toEqual({ readonly: true });
	});
	test('test cancel edit', () => {
		const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };

		expect(profileReducer(
			state as ProfileSchema,
			profileActions.cancelEdit(),
		)).toEqual({
			readonly: true,
			validateErrors: undefined,
			data,
			form: data,
		});
	});
	test('test update profile', () => {
		const state: DeepPartial<ProfileSchema> = { form: { username: '' } };

		expect(profileReducer(
			state as ProfileSchema,
			profileActions.updateProfile({
				username: 'newUsername',
			}),
		)).toEqual({
			form: { username: 'newUsername' },
		});
	});
	test('test update profile service pending', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateErrors: [ValidateProfileError.SERVER_ERROR],
		};

		expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.pending,
		)).toEqual({
			isLoading: true,
			validateErrors: undefined,
		});
	});
	test('test update profile service fulfilled', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
		};

		expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.fulfilled(data, ''),
		)).toEqual({
			isLoading: false,
			validateErrors: undefined,
			readonly: true,
			form: data,
			data,
		});
	});
});