import { default as React } from 'react';
import { ButtonProps } from '../button/button';
type Props<T> = {
    title: string;
    description?: string;
    content: React.ReactNode;
    showDismiss?: boolean;
    stopDimissOnCta?: boolean;
    ctaList: Array<ButtonProps & {
        actionId: T;
    }>;
    onAction?: (actionId: T) => void;
};
declare function Dialog({ title, description, content, ctaList, onAction, showDismiss, stopDimissOnCta, }: Props<string | unknown>): React.JSX.Element;
export default Dialog;
