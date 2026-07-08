import { default as React } from 'react';
export type PopoverProps = {
    open?: boolean;
    onOpenChange?: (value: boolean) => void;
    onClose?: (value: string) => void;
    children: React.ReactNode;
};
export declare function Popover({ children, onClose, open, onOpenChange }: PopoverProps): React.JSX.Element;
