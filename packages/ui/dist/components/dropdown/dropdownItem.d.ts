import { default as React } from 'react';
import { Item as RadixItem } from '@radix-ui/react-dropdown-menu';
export type DropdownItemProps = {
    value: string;
} & React.ComponentPropsWithoutRef<typeof RadixItem>;
export declare const DropdownItem: React.ForwardRefExoticComponent<{
    value: string;
} & Omit<import('@radix-ui/react-dropdown-menu').DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
