import { Theme } from '@interface/index';
import { themeColorTokens } from '@styles/theme/generatedThemeColors';

export function getColorFromUITheme(color: string, theme: Theme): string {
    const colorToken = themeColorTokens[color as keyof typeof themeColorTokens];
    return colorToken?.value?.[theme] || color;
}
