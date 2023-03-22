import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';
import AvatarImg from 'shared/assets/test/avatarStorybook.png';

export default {
	title: 'entities/CommentList',
	component: CommentList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	comments: [
		{
			id: '1',
			text: 'first comment',
			user: {
				id: '1',
				username: 'admin',
				avatar: AvatarImg,
			},
		},
		{
			id: '2',
			text: 'second comment',
			user: {
				id: '2',
				username: 'user',
				avatar: AvatarImg,
			},
		},
	],
};

export const Loading = Template.bind({});
Loading.args = {
	comments: [],
	isLoading: true,
};