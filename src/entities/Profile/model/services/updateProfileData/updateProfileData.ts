import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/updateProfileData',
	async (_, thunkAPI) => {
		const {
			extra,
			rejectWithValue,
			getState,
		} = thunkAPI;
		console.log('tut', getState);
		const formData = getProfileForm(getState());
		console.log('hi', formData);
		try {
			const response = await extra.api.put<Profile>('/profile', formData);

			return response.data;
		} catch (e) {
			console.log(e);
			return rejectWithValue('error');
		}
	},
);
