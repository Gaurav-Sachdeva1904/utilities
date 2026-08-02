import type { Meta, StoryObj } from '@storybook/react';
import Select from '@components/select';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `
Select components allow users to choose an option from a dropdown list.

They support:
- Single and multiple selection modes
- Customizable styles and sizes
- Keyboard and screen-reader accessibility
        `,
            },
        },
    },

    argTypes: {
        items: {
            control: 'object',
            description: 'Array of items to display in the dropdown',
            table: {
                type: { summary: 'Array<{ key: string; value: string }>' },
            },
        },
        label: {
            control: 'text',
            description: 'Label displayed above the select trigger',
            table: {
                type: { summary: 'string' },
            },
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text when no item is selected',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Select an option' },
            },
        },
        value: {
            control: 'text',
            description: 'Currently selected value',
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            control: 'text',
            description: 'Default selected value',
            table: {
                type: { summary: 'string' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the select component',
        },
        clearable: {
            control: 'boolean',
            description: 'Shows a clear button beside the trigger when a value is selected',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        clearLabel: {
            control: 'text',
            description: 'Accessible label for the clear button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Clear selection' },
            },
        },
        position: {
            control: 'select',
            options: ['top', 'right', 'bottom', 'left'],
            description: 'Position of the dropdown relative to the select trigger',
            table: {
                type: { summary: 'top | right | bottom | left' },
                defaultValue: { summary: 'bottom' },
            },
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes to apply to the select component',
        },
        onOpenChange: {
            action: 'toggled',
            description: 'Handler called when the dropdown is opened or closed',
        },
        onSelect: {
            action: 'changed',
            description: 'Change handler when an item is selected',
        },
    },

    args: {
        label: 'Select',
        items: [
            { key: 'Option 1', value: 'option1' },
            { key: 'Option 2', value: 'option2' },
            { key: 'Option 3', value: 'option3' },
        ],
        placeholder: 'Select an option',
        clearLabel: 'Clear selection',
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Playground: Story = {
    args: {
        items: [
            { key: 'Apple', value: 'apple' },
            { key: 'Orange', value: 'orange' },
            { key: 'Potatoes', value: 'potatoes' },
            { key: 'Tomatoes', value: 'tomatoes' },
            { key: 'Option 1', value: 'option1' },
            { key: 'Option 2', value: 'option2' },
            { key: 'Option 3', value: 'option3' },
        ],
        placeholder: 'Select fruit',
    },
};

export const Multiple: Story = {
    args: {
        items: [
            [
                { key: 'Apple', value: 'apple' },
                { key: 'Orange', value: 'orange' },
            ],
            [
                { key: 'Potatoes', value: 'potatoes' },
                { key: 'Tomatoes', value: 'tomatoes' },
            ],
        ],
        placeholder: 'Select fruit',
    },
};

export const MultipleGroups: Story = {
    args: {
        items: {
            Fruits: [
                { key: 'Apple', value: 'apple', icon: 'tag' },
                { key: 'Orange', value: 'orange' },
            ],
            Vegetables: [
                { key: 'Potatoes', value: 'potatoes', disabled: true },
                { key: 'Tomatoes', value: 'tomatoes' },
            ],
        },
        placeholder: 'Select fruit',
    },
};

export const Clearable: Story = {
    args: {
        label: 'Category',
        items: [
            { key: 'Food', value: 'food' },
            { key: 'Travel', value: 'travel' },
        ],
        value: 'food',
        clearable: true,
        placeholder: 'Select category',
    },
};
