import * as React from 'react';
type DropdownContentProps = {
    onSelect?: (value: string) => void;
    children: React.ReactNode | React.ReactElement[];
};
export declare function DropdownContent({ onSelect, children }: DropdownContentProps): null;
export {};
