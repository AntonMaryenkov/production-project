import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
	test('test set username', () => {
		const state: DeepPartial<LoginSchema> = { username: 'username' };
		expect(loginReducer(
			state as LoginSchema,
			loginActions.setUsername('username')
		)).toEqual({ username: 'username' });
	});
	test('test set password', () => {
		const state: DeepPartial<LoginSchema> = { password: '12345678' };
		expect(loginReducer(
			state as LoginSchema,
			loginActions.setPassword('12345678')
		)).toEqual({ password: '12345678' });
	});
});