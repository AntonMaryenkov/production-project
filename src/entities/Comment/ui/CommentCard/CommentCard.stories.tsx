import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';
import AvatarImg from 'shared/assets/test/avatarStorybook.png';

export default {
	title: 'entities/CommentCard',
	component: CommentCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	comment: {
		id: '1',
		text: 'first comment',
		user: {
			id: '1',
			username: 'admin',
			avatar: AvatarImg,
		},
	},
};

export const Loading = Template.bind({});
Loading.args = {
	comment: {
		id: '1',
		text: 'first comment',
		user: {
			id: '1',
			username: 'admin',
			avatar: AvatarImg,
		},
	},
	isLoading: true,
};