import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
	profile: {
		form: {
			first: 'first',
			lastname: 'lastname',
			age: 20,
			currency: Currency.RUB,
			country: Country.Russia,
			city: 'Moscow',
			username: 'username',
			avatar: 'https://dic.academic.ru/pictures/wiki/files/77/Melvin_van_Horne.png',
		},
	},
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
	profile: {
		form: {
			first: 'first',
			lastname: 'lastname',
			age: 20,
			currency: Currency.RUB,
			country: Country.Russia,
			city: 'Moscow',
			username: 'username',
			avatar: 'https://dic.academic.ru/pictures/wiki/files/77/Melvin_van_Horne.png',
		},
	},
})];