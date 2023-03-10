import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
	title: 'shared/Select',
	component: Select,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Укажите значение',
	options: [
		{value: 'value1', content: 'Первый пункт'},
		{value: 'value2', content: 'Второй пункт'},
		{value: 'value3', content: 'Третий пункт'},
	],
};
