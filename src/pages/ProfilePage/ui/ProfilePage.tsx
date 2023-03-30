import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileIsLoading,
	getProfileReadonly,
	getProfileValidateErrors,
	profileActions,
	ProfileCard,
	profileReducer,
	ValidateProfileError,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);
	const { id } = useParams<{ id: string }>();

	const validateErrorTranslates = {
		[ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
		[ValidateProfileError.NO_DATA]: t('Данные не указаны'),
		[ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
		[ValidateProfileError.INCORRECT_USERNAME]: t('Поле username обязательно'),
		[ValidateProfileError.INCORRECT_AVATAR]: t('Некорректная ссылка на аватар'),
		[ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
		[ValidateProfileError.INCORRECT_CURRENCY]: t('Ошибка при выборе валюты'),
		[ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
		[ValidateProfileError.INCORRECT_CITY]: t('Некорректный город'),
	};

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id));
		}
	});

	const onChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ first: value || '' }));
	}, [dispatch]);

	const onChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ lastname: value || '' }));
	}, [dispatch]);

	const onChangeAge = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
	}, [dispatch]);

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ city: value || '' }));
	}, [dispatch]);

	const onChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ username: value || '' }));
	}, [dispatch]);

	const onChangeAvatar = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ avatar: value || '' }));
	}, [dispatch]);

	const onChangeCurrency = useCallback((currency?: Currency) => {
		dispatch(profileActions.updateProfile({ currency }));
	}, [dispatch]);

	const onChangeCountry = useCallback((country?: Country) => {
		dispatch(profileActions.updateProfile({ country }));
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<Page className={classNames('', {}, [className])}>
				<ProfilePageHeader />
				{validateErrors?.length && validateErrors.map((err) => (
					<Text
						key={err}
						theme={TextTheme.ERROR}
						text={validateErrorTranslates[err]}
					/>
				))}
				<ProfileCard
					data={formData}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
				/>
			</Page>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;