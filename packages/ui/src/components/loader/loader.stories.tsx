import type { Meta, StoryObj } from '@storybook/react';
import Loader from '@components/loader';

const meta: Meta<typeof Loader> = {
    title: 'Components/Loader',
    component: Loader,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
Loader is a simple component to indicate loading state.

Usage:
\`\`\`tsx
<Loader size="M" />
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
    },

    args: {
        size: 'M',
    },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {};
