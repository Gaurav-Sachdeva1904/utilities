import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, Trigger, Content, Separator, Item } from './index';
import Button from '@components/button';

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        controls: { disable: true },
        docs: {
            description: {
                component: `
Popover is a compound component built on Radix.

Usage:
\`\`\`tsx
<Dropdown>
  <Trigger>...</Trigger>
  <Content>
    <Item value="1">...</Item>
	<Separator />
	<Item value="2">...</Item>
  </Content>
</Dropdown>
\`\`\`
        `,
            },
        },
    },

    argTypes: {
        onSelect: {
            action: 'changed',
            description: 'Change handler when an item is selected',
        },
    },

    args: {},
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    render: args => (
        <Dropdown onSelect={args.onSelect}>
            <Trigger>
                <Button>Open</Button>
            </Trigger>
            <Content>
                <Item value="1">Apples</Item>
                <Item value="2">Oranges</Item>
                <Separator />
                <Item value="3">Potatoes</Item>
            </Content>
        </Dropdown>
    ),
};
