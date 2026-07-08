export type ThemeColorToken = {
    key: string;
    label: string;
    cssVar: string;
    value?: {
        light?: string;
        dark?: string;
    };
};
export declare const themeColorTokens: Record<string, ThemeColorToken>;
