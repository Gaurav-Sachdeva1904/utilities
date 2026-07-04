import type { Meta, StoryObj } from '@storybook/react';
import Table, { TableColumn } from './index';

const meta: Meta<typeof Table> = {
    title: 'Components/Table',
    component: Table,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
Table is a component to display data in a tabular format.

Usage:
\`\`\`tsx
<Table columns={columns} data={data} />
\`\`\`		
		`,
            },
        },
    },
    argTypes: {
        columns: {
            control: 'object',
            description: 'Columns configuration for the table',
        },
        data: {
            control: 'object',
            description: 'Data to be displayed in the table',
        },
        className: {
            control: 'text',
            description: 'Additional class names for the table',
        },
        multiSelect: {
            control: 'boolean',
            description: 'Enable multi-selection of rows',
        },
        allowSelection: {
            control: 'boolean',
            description: 'Allow row selection',
        },
        render: {
            action: 'changed',
            description: 'Custom render function for table cells',
        },
        onSelect: {
            action: 'onSelect',
            description: 'Called when rows are selected',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
    render: args => (
        <Table
            {...args}
            render={(key: 'name' | 'age', item: { name: string; age: number }) => (
                <div>{item[key]}</div>
            )}
            onSelect={args.onSelect}
            columns={
                [
                    {
                        header: 'Name',
                        key: 'name',
                        width: 150,
                    },
                    {
                        header: 'Age',
                        key: 'age',
                        width: 50,
                    },
                ] as TableColumn<{ name: string; age: number }>[]
            }
            data={[
                {
                    name: 'John Doe',
                    age: 28,
                },
                {
                    name: 'Jane Smith',
                    age: 34,
                    disabled: true,
                },
                {
                    name: 'Alice Johnson',
                    age: 45,
                },
            ]}
        />
    ),
};
