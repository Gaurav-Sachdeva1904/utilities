import parserTs from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import baseConfig from './config.base.js';

export default [
    {
        ...baseConfig,
        languageOptions: {
            parser: parserTs,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: {
                React: 'readonly',
            },
        },

        plugins: {
            ...baseConfig.plugins,
            react: pluginReact,
        },

        rules: {
            ...baseConfig.rules,
            'react/jsx-uses-react': 'off', // React 17+ JSX transform
            'react/react-in-jsx-scope': 'off',
        },

        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    {
        files: ['**/*-test.{ts,js}'],
        rules: {
            'no-restricted-imports': 'off',
        },
    },
];
