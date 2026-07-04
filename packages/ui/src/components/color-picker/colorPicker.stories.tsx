import type { Meta, StoryObj } from '@storybook/react';
import ColorPicker from '@components/color-picker/colorPickers';

const meta: Meta<typeof ColorPicker> = {
    title: 'Components/ColorPicker',
    component: ColorPicker,
    tags: ['autodocs'],
    parameters: {
        docsOnly: true,
        docs: {
            description: {
                component: `
ColorPicker component allows users to select a color from a palette.

Usage:
\`\`\`tsx
<ColorPicker
	value={"#ff0000"}
  	onColorSelect={(color) => console.log(color)}
/>
\`\`\`
		`,
            },
        },
    },
    argTypes: {
        value: {
            control: 'text',
            description: 'Controlled selected color hex code',
        },
        onColorSelect: {
            action: 'color selected',
            description: 'Callback function when a color is selected',
        },
    },
    args: {},
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {};

export const ThemePreset: Story = {
    args: {
        value: '#2563eb',
    },
};
