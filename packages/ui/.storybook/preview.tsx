import type { Preview } from "@storybook/react";
import React from "react";
import Provider from "../src/components/provider";

import "./preview.scss";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            options: [
                { name: "light", value: "#f5f6f8" },
                { name: "dark", value: "#0b0b0b" },
            ],
        },
    },

    decorators: [
        (Story, context) => {
            const theme = context.globals.theme || "light";
            return (
                <Provider classname="storybook" theme={theme}>
                    <Story />
                </Provider>
            );
        },
    ],

    globalTypes: {
        theme: {
            name: "Theme",
            description: "Global theme",
            defaultValue: "light",
            toolbar: {
                icon: "circlehollow",
                items: [
                    { value: "light", title: "Light" },
                    { value: "dark", title: "Dark" },
                ],
            },
        },

        backgrounds: {
            disable: true,
        },
    },
};

export default preview;
