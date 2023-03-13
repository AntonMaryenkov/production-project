import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { KeyboardEvent } from 'react';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	error?: string;
	isLoading?: boolean;
	readonly?: boolean;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeCurrency?: (currency?: Currency) => void;
	onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		isLoading,
		error,
		readonly,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeCity,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
		onChangeCountry,
	} = props;
	const { t } = useTranslation('profile');

	if (isLoading) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ERROR}
					title={t('Произошла ошибка при загрузке профиля')}
					text={t('Попробуйте обновить страницу')}
					align={TextAlign.CENTER}
				/>
			</div>
		);
	}
	//// вынести валидацию
	const validateAge = (event: KeyboardEvent<HTMLInputElement>) => {
		if (!/[0-9]/.test(event.key)) {
			event.preventDefault();
		}
	};

	const mods: Mods = {
		[cls.editing]: !readonly,
	};

	return (
		<div className={classNames(cls.ProfileCard, mods, [className])}>
			{data?.avatar && (
				<div className={cls.avatarWrapper}>
					<Avatar
						src={data?.avatar}
					/>
				</div>
			)}
			<div className={cls.data}>
				<Input
					value={data?.first}
					placeholder={t('Ваше имя')}
					className={cls.input}
					onChange={onChangeFirstname}
					readonly={readonly}
				/>
				<Input
					value={data?.lastname}
					placeholder={t('Ваша фамилия')}
					className={cls.input}
					onChange={onChangeLastname}
					readonly={readonly}
				/>
				<Input
					value={data?.age}
					placeholder={t('Ваш возраст')}
					className={cls.input}
					onChange={onChangeAge}
					readonly={readonly}
					onKeyPress={validateAge}
				/>
				<Input
					value={data?.city}
					placeholder={t('Город')}
					className={cls.input}
					onChange={onChangeCity}
					readonly={readonly}
				/>
				<Input
					value={data?.username}
					placeholder={t('Имя пользователя')}
					className={cls.input}
					onChange={onChangeUsername}
					readonly={readonly}
				/>
				<Input
					value={data?.avatar}
					placeholder={t('Введите ссылку на аватар')}
					className={cls.input}
					onChange={onChangeAvatar}
					readonly={readonly}
				/>
				<CountrySelect
					className={cls.input}
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly}
				/>
				<CurrencySelect
					className={cls.input}
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
			</div>
		</div>
	);
};