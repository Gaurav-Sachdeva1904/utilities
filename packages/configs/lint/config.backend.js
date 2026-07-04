import parserTs from '@typescript-eslint/parser';
import baseConfig from './config.base.js';

export default [
    {
        ...baseConfig,
        languageOptions: {
            parser: parserTs,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            ...baseConfig.rules,
            'no-restricted-imports': ['off', { patterns: ['.*'] }],
        },
    },
];
