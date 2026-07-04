import type { Meta, StoryObj } from '@storybook/react';
import { iconMap, IconName } from './icons';
import Icon from './index';

const meta: Meta<typeof Icon> = {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `Icon component for displaying various icons.

Usage:
\`\`\`tsx
<Icon name="Home" />
\`\`\`
		    `,
            },
        },
    },
    argTypes: {
        name: {
            control: 'select',
            options: [
                'home',
                'settings',
                'plus',
                'trash',
                // Add other icon names here
            ],
            description: 'Name of the icon to display',
            table: {
                type: { summary: 'IconName' },
                defaultValue: { summary: 'home' },
            },
        },
        size: {
            control: 'select',
            options: ['XS', 'S', 'M', 'L', 'XL'],
            description: 'Size of the icon',
            table: {
                type: { summary: 'XS | S | M | L | XL | number' },
                defaultValue: { summary: 'S' },
            },
        },
        color: {
            control: 'color',
            description: 'Color of the icon',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'var(--text-primary)' },
            },
        },
        strokeWidth: {
            control: 'number',
            description: 'Stroke width of the icon',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '1.75' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes for the icon',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '-' },
            },
        },
    },

    args: {
        name: 'home',
        size: 'S',
        color: 'var(--text-primary)',
        strokeWidth: 1.75,
    },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Icon name="home" size="XS" />
            <Icon name="home" size="S" />
            <Icon name="home" size="M" />
            <Icon name="home" size="L" />
            <Icon name="home" size="XL" />
        </div>
    ),
};

export const AllIcons: Story = {
    render: () => {
        const iconNames = Object.keys(iconMap) as IconName[];

        return (
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {iconNames.map(iconName => (
                    <div
                        key={iconName}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '80px',
                        }}>
                        <Icon name={iconName} size={32} />
                        <span style={{ marginTop: '8px', fontSize: '12px' }}>{iconName}</span>
                    </div>
                ))}
            </div>
        );
    },
};
