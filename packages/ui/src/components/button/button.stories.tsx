import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
Buttons are used to trigger actions.

They support:
- Multiple variants
- Multiple sizes
- Loading and disabled states
- Full keyboard and screen-reader accessibility
        `,
            },
        },
    },

    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'accent', 'negative'],
            description: 'Visual style of the button',
            table: {
                type: { summary: 'primary | secondary | accent | negative' },
                defaultValue: { summary: 'primary' },
            },
        },
        size: {
            control: 'select',
            options: ['XS', 'S', 'M', 'L', 'XL'],
            description: 'Size of the button',
            table: {
                type: { summary: 'XS | S | M | L | XL' },
                defaultValue: { summary: 'M' },
            },
        },
        icon: {
            control: 'select',
            description: 'Name of the icon to display',
            options: ['home', 'settings'],
            table: {
                type: { summary: 'IconName' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the button',
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler',
        },
        children: {
            control: 'text',
            description: 'Button label',
        },
    },

    args: {
        children: 'Button',
        variant: 'primary',
        size: 'M',
        disabled: false,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Primary: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button variant="accent">Accent</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="negative">Negative</Button>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button size="S">Small</Button>
            <Button size="M">Medium</Button>
            <Button size="L">Large</Button>
        </div>
    ),
};
