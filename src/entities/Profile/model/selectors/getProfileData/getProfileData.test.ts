import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileData', () => {
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
				data,
			},
		};
		expect(getProfileData(state as StateSchema)).toEqual(data);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileData(state as StateSchema)).toEqual(undefined);
	});
});