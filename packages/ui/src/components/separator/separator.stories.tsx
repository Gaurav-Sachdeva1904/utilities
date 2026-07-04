import type { Meta, StoryObj } from '@storybook/react';
import Separator from './index';

const meta: Meta<typeof Separator> = {
    title: 'Components/Separator',
    component: Separator,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
Separator is a simple component to add separator between elements.

Usage:
\`\`\`tsx
<Separator  />
\`\`\`		
		`,
            },
        },
    },
    argTypes: {
        width: {
            control: 'text',
            description: 'Width of the separator',
        },
        className: {
            control: 'text',
            description: 'Additional class names for the separator',
        },
    },

    args: {},
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {};
