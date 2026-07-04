import type { Meta, StoryObj } from '@storybook/react';
import Container from './container';

const meta: Meta<typeof Container> = {
    title: 'Components/Container',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
Container is a simple container with elevated Background.

Usage:
\`\`\`tsx
<Container >Sample Content</Container>
\`\`\`
		`,
            },
        },
    },

    args: {},
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
    render: () => <Container style={{ padding: '12px' }}>Sample Content</Container>,
};
