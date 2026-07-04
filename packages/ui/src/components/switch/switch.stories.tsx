import type { Meta, StoryObj } from '@storybook/react';
import Switch from './index';

const meta: Meta<typeof Switch> = {
    title: 'Components/Switch',
    component: Switch,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
Switch is a simple component to add a toggle switch.

Usage:
\`\`\`tsx
<Switch />
\`\`\`		
		`,
            },
        },
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['XS', 'S', 'M', 'L', 'XL'],
            description: 'Size of the button',
            table: {
                type: { summary: 'XS | S | M | L | XL' },
                defaultValue: { summary: 'M' },
            },
        },
        label: {
            control: 'text',
            description: 'Label displayed above the select trigger',
            table: {
                type: { summary: 'string' },
            },
        },
        onChange: {
            action: 'changed',
            description: 'Callback function triggered when the switch state changes',
            table: {
                type: { summary: '(value: boolean) => void' },
            },
        },
        value: {
            control: 'boolean',
            description: 'Current state of the switch (on/off)',
            table: {
                type: { summary: 'boolean' },
            },
        },
    },

    args: {
        label: 'Switch',
    },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Playground: Story = {
    args: {
        label: 'Switch',
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, flexDirection: 'column' }}>
            <Switch label="Extra Small" size="XS" />
            <Switch label="Small" size="S" />
            <Switch label="Medium" size="M" />
            <Switch label="Large" size="L" />
            <Switch label="Extra Large" size="XL" />
        </div>
    ),
};
