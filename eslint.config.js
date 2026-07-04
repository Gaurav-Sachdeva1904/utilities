// eslint.config.js (root-level)
import pluginTs from "@typescript-eslint/eslint-plugin";
import pluginPrettier from "eslint-plugin-prettier";
import pluginCheckFile from "eslint-plugin-check-file";

export default {
    files: ["**/*.{ts,tsx,js,jsx}"],
    ignores: [
        "**/node_modules/**",
        "**/build/**",
        "**/.next/**",
        "**/.storybook/**",
        "*.config.js",
        "scripts/**",
        "**.stories.*",
    ],

    plugins: {
        "@typescript-eslint": pluginTs,
        prettier: pluginPrettier,
        "check-file": pluginCheckFile,
    },

    rules: {
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: ["variable"],
                format: ["camelCase", "PascalCase", "UPPER_CASE"],
                leadingUnderscore: "allow",
            },
            {
                selector: ["enumMember"],
                format: ["PascalCase", "UPPER_CASE"],
                leadingUnderscore: "allow",
            },
            { selector: ["function"], format: ["PascalCase", "camelCase"] },
        ],
        "check-file/filename-naming-convention": ["error", { "*.{js,jsx,ts,tsx}": "CAMEL_CASE" }],
        "check-file/folder-naming-convention": ["error", { "packages/**/": "KEBAB_CASE" }],
        "prettier/prettier": [
            "error",
            {
                arrowParens: "avoid",
                bracketSameLine: true,
                bracketSpacing: true,
                endOfLine: "lf",
                proseWrap: "always",
                printWidth: 100,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: "all",
                useTabs: false,
            },
        ],
        "no-restricted-imports": ["warn", { patterns: [".*"] }],
    },
};
