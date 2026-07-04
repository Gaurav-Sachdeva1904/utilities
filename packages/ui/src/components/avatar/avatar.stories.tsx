import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `
Avatar component is used to display user profile pictures or initials.

Usage:
\`\`\`tsx
<Avatar src="path_to_image" alt="User Name" size="M" fallback={{text:"FB"}}/>
\`\`\`
		`,
            },
        },
    },
    argTypes: {
        src: {
            control: 'text',
            description: 'Source URL of the avatar image',
        },
        alt: {
            control: 'text',
            description: 'Alternative text for the avatar image',
        },
        size: {
            control: 'select',
            options: ['XS', 'S', 'M', 'L', 'XL'],
            description: 'Size of the avatar',
            table: {
                type: { summary: 'XS | S | M | L | XL' },
                defaultValue: { summary: 'M' },
            },
        },
        fallback: {
            control: 'object',
            description: 'Fallback options when image is not available',
            table: {
                type: { summary: '{ color?: string; bgColor?: string; text?: string; }' },
            },
        },
    },
    args: {
        src: 'https://via.placeholder.com/150',
        alt: 'User Avatar',
        size: 'M',
        fallback: {
            text: 'UA',
            color: '#FFFFFF',
            bgColor: '#000000',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
