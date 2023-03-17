import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';

export default {
	title: 'shared/Code',
	component: Code,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	text: 'class ShoppingList extends React.Component {\n' +
		'  render() {\n' +
		'    return (\n' +
		'      <div className="shopping-list">\n' +
		'        <h1>Список покупок для {this.props.name}</h1>\n' +
		'        <ul>\n' +
		'          <li>Instagram</li>\n' +
		'          <li>WhatsApp</li>\n' +
		'          <li>Oculus</li>\n' +
		'        </ul>\n' +
		'      </div>\n' +
		'    );\n' +
		'  }\n' +
		'}',
};