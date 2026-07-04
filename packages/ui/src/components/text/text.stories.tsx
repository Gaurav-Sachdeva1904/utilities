import type { Meta, StoryObj } from '@storybook/react';
import Text from './text';

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
Text is a simple template wrapper for text of different size.

Usage:
\`\`\`tsx
<Text size="M" text="Warn"/>
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
        text: {
            control: 'text',
            description: 'text string',
            table: {
                type: { summary: 'string' },
            },
        },
    },

    args: {
        size: 'M',
        text: 'Sample Text',
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Text size="XS" text="Extra Small" />
            <Text size="S" text="Small" />
            <Text size="M" text="Medium" />
            <Text size="L" text="Large" />
            <Text size="XL" text="Extra Large" />
        </div>
    ),
};
