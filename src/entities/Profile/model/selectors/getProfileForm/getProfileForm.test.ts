import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileForm', () => {
	test('should return data', () => {
		const data = {
			first: 'first',
			lastname: 'lastname',
			age: 20,
			currency: Currency.RUB,
			country: Country.Russia,
			city: 'Moscow',
			username: 'username',
		};

		const state: DeepPartial<StateSchema> = {
			profile: {
				form: data,
			},
		};
		expect(getProfileForm(state as StateSchema)).toEqual(data);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileForm(state as StateSchema)).toEqual(undefined);
	});
});