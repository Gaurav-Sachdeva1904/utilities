import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '@components/tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `
Tabs let users switch between related options using a compact horizontal selector.

Usage:
\`\`\`tsx
<Tabs tabs={[{ key: 'Overview', value: 'overview' }]} />
\`\`\`
                `,
            },
        },
    },
    argTypes: {
        tabs: {
            control: 'object',
            description: 'Tabs to render',
            table: {
                type: { summary: 'Array<{ key: string; value: string; disabled?: boolean }>' },
            },
        },
        value: {
            control: 'text',
            description: 'Currently selected tab value',
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            control: 'text',
            description: 'Initial selected tab value for uncontrolled usage',
            table: {
                type: { summary: 'string' },
            },
        },
        size: {
            control: 'select',
            options: ['XS', 'S', 'M', 'L', 'XL'],
            description: 'Size of the tabs',
            table: {
                type: { summary: 'XS | S | M | L | XL' },
                defaultValue: { summary: 'M' },
            },
        },
        onSelect: {
            action: 'selected',
            description: 'Called when a tab is selected',
            table: {
                type: { summary: '(value: string) => void' },
            },
        },
    },
    args: {
        tabs: [
            { key: 'Overview', value: 'overview' },
            { key: 'Analytics', value: 'analytics' },
            { key: 'Settings', value: 'settings' },
        ],
        defaultValue: 'overview',
    },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Tabs
                size="XS"
                defaultValue="overview"
                tabs={[
                    { key: 'Overview', value: 'overview' },
                    { key: 'Analytics', value: 'analytics' },
                ]}
            />
            <Tabs
                size="S"
                defaultValue="overview"
                tabs={[
                    { key: 'Overview', value: 'overview' },
                    { key: 'Analytics', value: 'analytics' },
                ]}
            />
            <Tabs
                size="M"
                defaultValue="overview"
                tabs={[
                    { key: 'Overview', value: 'overview' },
                    { key: 'Analytics', value: 'analytics' },
                ]}
            />
            <Tabs
                size="L"
                defaultValue="overview"
                tabs={[
                    { key: 'Overview', value: 'overview' },
                    { key: 'Analytics', value: 'analytics' },
                ]}
            />
            <Tabs
                size="XL"
                defaultValue="overview"
                tabs={[
                    { key: 'Overview', value: 'overview' },
                    { key: 'Analytics', value: 'analytics' },
                ]}
            />
        </div>
    ),
};

export const DisabledTab: Story = {
    args: {
        tabs: [
            { key: 'Overview', value: 'overview' },
            { key: 'Analytics', value: 'analytics', disabled: true },
            { key: 'Settings', value: 'settings' },
        ],
        defaultValue: 'overview',
    },
};
