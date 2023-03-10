import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	isOpen: true,
	children: 'The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.',
};

export const Dark = Template.bind({});
Dark.args = {
	isOpen: true,
	children: 'The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];