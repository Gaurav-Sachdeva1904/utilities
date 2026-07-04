import type { Meta, StoryObj } from '@storybook/react';
import TextField from './index';

const meta: Meta<typeof TextField> = {
    title: 'Components/TextField',
    component: TextField,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
TextField is a simple component to get user input.

Usage:
\`\`\`tsx
<TextField label="TextField" />
\`\`\`
		`,
            },
        },
    },
    argTypes: {
        className: {
            control: 'text',
            description: 'Additional class name for the text field container',
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            control: 'text',
            description: 'Label of the text field',
            table: {
                type: { summary: 'string' },
            },
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number'],
            description: 'Type of the text field',
            table: {
                type: { summary: 'text | email | password | number' },
                defaultValue: { summary: 'text' },
            },
        },
        value: {
            control: 'text',
            description: 'Controlled Value of the text field',
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            control: 'text',
            description: 'Default value of the text field',
            table: {
                type: { summary: 'string' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disable the textfield',
        },
        isRequired: {
            control: 'boolean',
            description: 'Whether the text field is required',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        onChange: {
            action: 'changed',
            description: 'Change handler when the value changes',
        },
    },

    args: {
        label: 'Text Field',
        type: 'text',
    },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {};
