import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
Checkbox is a simple component to add a toggle checkbox.

Usage:
\`\`\`tsx
<Checkbox />
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
        value: {
            control: 'boolean',
            description: 'Current state of the checkbox (checked/unchecked)',
            table: {
                type: { summary: 'boolean' },
            },
        },
        onChange: {
            action: 'changed',
            description: 'Callback function triggered when the checkbox state changes',
            table: {
                type: { summary: '(value: boolean) => void' },
            },
        },
    },

    args: {
        label: 'Checkbox',
    },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
    args: {
        label: 'Checkbox',
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, flexDirection: 'column' }}>
            <Checkbox label="Small" size="S" />
            <Checkbox label="Medium" size="M" />
            <Checkbox label="Large" size="L" />
        </div>
    ),
};
