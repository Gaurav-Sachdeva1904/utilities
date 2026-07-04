import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-docs', '@storybook/addon-onboarding'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        // docsMode: true, // This enables docs-only mode
    },
};
export default config;
