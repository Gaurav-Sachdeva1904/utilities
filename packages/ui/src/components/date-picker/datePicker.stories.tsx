import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@components/date-picker/datePicker';

const meta: Meta<typeof DatePicker> = {
    title: 'Components/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `
DatePicker is a Date Selection component built on Radix and React-Day-Picker.

Usage:
\`\`\`tsx
<DatePicker mode="single" placeholder="Select Date" onChange={() => {}}/>;
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        mode: {
            control: { type: 'radio' },
            options: ['single', 'range'],
        },
        placeholder: { control: 'text', description: 'Placeholder text for the Date picker' },
        disabled: {
            control: 'object',
            description: 'Disabled dates in the picker',
            table: {
                type: {
                    summary:
                        'boolean | Date | Date[] | DateRange | {dayOfWeek: [specifies days of week 0-6]} | {before} | {after}',
                },
                defaultValue: { summary: 'primary' },
            },
        },
        disabledPicker: {
            control: 'boolean',
            description: 'Disabled picker',
        },
        captionLayout: {
            control: { type: 'radio' },
            options: ['labels', 'dropdown'],
            description: 'Display month and year captions as labels or dropdowns',
        },
    },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const SingleDatePicker: Story = {
    args: {
        mode: 'single',
        placeholder: 'Select a date',
    },
};

export const RangeDatePicker: Story = {
    args: {
        mode: 'range',
        placeholder: 'Select a date range',
    },
};
