import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, useDialogContext } from './index';
import Button from '@components/button';

const meta: Meta<typeof Dialog> = {
    title: 'Components/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
Dialog is a compound component built on Radix.

Usage:
\`\`\`tsx
const { addDialog } = useDialogContext();
const openDialog = () => {
	addDialog({
		dialog: <Dialog/>,
		onOpenChange: (isOpen: boolean) => {},
		closeOnBackdropClick: true,
	});
};
<Button onClick={() => openDialog()}>Open Dialog</Button>;
\`\`\`
        `,
            },
        },
    },

    argTypes: {
        title: {
            control: 'text',
            description: 'Title of the Dialog',
        },
        description: {
            control: 'text',
            description: 'Description of the Dialog',
        },
        content: {
            control: 'object',
            description: 'Content inside the body of Dialog',
        },
        ctaList: {
            control: 'object',
            description: "List of CTA's at the footer",
            table: {
                type: {
                    summary: 'Array<{variant: ButtonVariant, actionId: string, label: string}>',
                },
            },
        },
        showDismiss: {
            control: 'boolean',
            description: 'Render Cross button at top right of dialog',
        },
        stopDimissOnCta: {
            control: 'boolean',
            description: 'Blocks closing of dialog which allows multiple dialog state on CTAs',
        },
        onAction: {
            action: 'changed',
            description: 'Invoke with CTA actionId upon press',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    render: args => {
        const { addDialog } = useDialogContext();
        const openDialog = () => {
            addDialog({
                dialog: (
                    <Dialog
                        {...args}
                        title="Dialog Title"
                        description="This is a description for the dialog."
                        content={
                            <div>
                                Dialog Content Goes Here<div>Dialog Content Goes Here</div>
                                <div>Dialog Content Goes Here</div>
                            </div>
                        }
                        ctaList={[
                            { label: 'Confirm', actionId: 'confirm', variant: 'accent' },
                            { label: 'Cancel', actionId: 'cancel', variant: 'secondary' },
                        ]}
                    />
                ),
                onOpenChange: (isOpen: boolean) => {
                    if (!isOpen) {
                        console.log('Dialog closed');
                    }
                },
            });
        };
        return <Button onClick={() => openDialog()}>Open Dialog</Button>;
    },
};
