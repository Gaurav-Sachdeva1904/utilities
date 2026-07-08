import { default as React } from 'react';
export type DropdownProps = {
    onSelect?: (value: string) => void;
    children: React.ReactNode;
};
export declare function Dropdown({ onSelect, children }: DropdownProps): React.JSX.Element;
