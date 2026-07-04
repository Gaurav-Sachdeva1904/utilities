import type { Meta, StoryObj } from '@storybook/react';
import Tag from './index';

const meta: Meta<typeof Tag> = {
    title: 'Components/Tag',
    component: Tag,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
Tag is a simple component to add tag.

Usage:
\`\`\`tsx
<Tag size="M" color="red" label="Warn"/>
\`\`\`
		`,
            },
        },
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['XS', 'S', 'M', 'L', 'XL'],
            description: 'Size of the loader',
            table: {
                type: { summary: 'XS | S | M | L | XL' },
                defaultValue: { summary: 'M' },
            },
        },
        label: {
            control: 'text',
            description: 'Label of the tag',
            table: {
                type: { summary: 'string' },
            },
        },
        color: {
            control: 'color',
            description: 'Background color of the tag',
            table: {
                type: { summary: 'string' },
            },
        },
    },

    args: {
        size: 'M',
        label: 'Tag',
        color: 'var(--blue-500)',
    },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Tag size="S" label="Small" />
            <Tag size="M" label="Medium" />
            <Tag size="L" label="Large" />
        </div>
    ),
};
