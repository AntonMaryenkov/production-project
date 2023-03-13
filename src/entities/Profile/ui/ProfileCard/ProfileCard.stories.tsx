import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/test/avatarStorybook.png';

export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	data: {
		first: 'first',
		lastname: 'lastname',
		age: 20,
		currency: Currency.RUB,
		country: Country.Russia,
		city: 'Moscow',
		username: 'username',
		avatar: AvatarImg,
	},
};

export const WithError = Template.bind({});
WithError.args = {
	error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
};

