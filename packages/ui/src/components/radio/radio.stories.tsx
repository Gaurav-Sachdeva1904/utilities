import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Radio, { RadioGroup, RadioGroupProps } from './index';

const items: RadioGroupProps['items'] = [
    { label: 'Personal', value: 'personal' },
    { label: 'Work', value: 'work' },
    { label: 'Travel', value: 'travel' },
];

const meta: Meta<typeof RadioGroup> = {
    title: 'Components/Radio',
    component: RadioGroup,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
RadioGroup renders a controlled set of radio options.

Usage:
\`\`\`tsx
<RadioGroup items={[{ label: 'One', value: 'one' }]} value="one" onChange={setValue} />
\`\`\`
                `,
            },
        },
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['XS', 'S', 'M', 'L', 'XL'],
            table: {
                type: { summary: 'XS | S | M | L | XL' },
                defaultValue: { summary: 'M' },
            },
        },
        value: {
            control: 'text',
            table: {
                type: { summary: 'string' },
            },
        },
        onChange: {
            action: 'changed',
            table: {
                type: { summary: '(value: string) => void' },
            },
        },
        items: {
            control: 'object',
            table: {
                type: { summary: 'RadioOption[]' },
            },
        },
    },
    args: {
        items,
        value: 'personal',
    },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Playground: Story = {
    render: args => {
        const [value, setValue] = React.useState(args.value);

        return <RadioGroup {...args} value={value} onChange={setValue} />;
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, flexDirection: 'column' }}>
            <RadioGroup items={items} size="XS" value="personal" />
            <RadioGroup items={items} size="S" value="personal" />
            <RadioGroup items={items} size="M" value="personal" />
            <RadioGroup items={items} size="L" value="personal" />
            <RadioGroup items={items} size="XL" value="personal" />
        </div>
    ),
};

export const SingleRadio: StoryObj<typeof Radio> = {
    render: () => {
        const [checked, setChecked] = React.useState(true);

        return (
            <Radio
                label="Selected radio"
                value="selected"
                size="M"
                checked={checked}
                onChange={setChecked}
            />
        );
    },
};
