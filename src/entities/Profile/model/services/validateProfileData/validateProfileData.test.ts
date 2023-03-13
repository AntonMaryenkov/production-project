import { validateProfileData } from './validateProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';

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

describe('validateProfileData', () => {
	test('success', async () => {
		const result = validateProfileData(data);

		expect(result).toEqual([]);
	});
	test('without first and last name', async () => {
		const result = validateProfileData({ ...data, first: '', lastname: '' });

		expect(result).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
		]);
	});
	test('incorrect age', async () => {
		const result = validateProfileData({ ...data, age: undefined });

		expect(result).toEqual([
			ValidateProfileError.INCORRECT_AGE,
		]);
	});
	test('incorrect country', async () => {
		const result = validateProfileData({ ...data, country: undefined });

		expect(result).toEqual([
			ValidateProfileError.INCORRECT_COUNTRY,
		]);
	});
	test('incorrect all', async () => {
		const result = validateProfileData({});

		expect(result).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY,
			ValidateProfileError.INCORRECT_CURRENCY,
			ValidateProfileError.INCORRECT_CITY,
			ValidateProfileError.INCORRECT_USERNAME,
			ValidateProfileError.INCORRECT_AVATAR,
		]);
	});
});