import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from 'entities/Profile';

describe('getProfileValidateErrors', () => {
	test('should return array of errors', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [
					ValidateProfileError.SERVER_ERROR,
					ValidateProfileError.NO_DATA,
					ValidateProfileError.INCORRECT_USER_DATA,
				],
			},
		};
		expect(getProfileValidateErrors(state as StateSchema)).toEqual([
			ValidateProfileError.SERVER_ERROR,
			ValidateProfileError.NO_DATA,
			ValidateProfileError.INCORRECT_USER_DATA,
		]);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
	});
});