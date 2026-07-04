import type { Meta, StoryObj } from '@storybook/react';
import { Popover, Trigger, Content } from './index';
import Button from '@components/button';

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
Popover is a compound component built on Radix.

Usage:
\`\`\`tsx
<Popover>
  <Trigger>...</Trigger>
  <Content>...</Content>
</Popover>
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        open: {
            control: 'boolean',
            description: 'controls the open state of popover',
        },
        onClose: {
            action: 'changed',
            description: 'Invoked when popover closes',
        },
        onOpenChange: {
            action: 'boolean',
            description: 'Invoked when popover open state changes',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    render: args => (
        <Popover {...args}>
            <Trigger>
                <Button className="btn btn-primary">Open Popover</Button>
            </Trigger>
            <Content>
                <div className="p-4">
                    <p>This is the content of the popover.</p>
                    <p>This is the content of the popover.</p>
                    <p>This is the content of the popover.</p>
                    <p>This is the content of the popover.</p>
                </div>
            </Content>
        </Popover>
    ),
};
