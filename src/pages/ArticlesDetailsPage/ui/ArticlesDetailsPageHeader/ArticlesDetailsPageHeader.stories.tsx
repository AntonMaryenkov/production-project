import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesDetailsPageHeader } from './ArticlesDetailsPageHeader';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
	title: 'pages/ArticlesDetailsPage/ArticlesDetailsPageHeader',
	component: ArticlesDetailsPageHeader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticlesDetailsPageHeader>;

const Template: ComponentStory<typeof ArticlesDetailsPageHeader> = (args) => <ArticlesDetailsPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];