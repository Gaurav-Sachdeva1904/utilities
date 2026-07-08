import { PopoverContentProps as RadixPopoverContentProps } from '@radix-ui/react-popover';
import * as React from 'react';
export type PopoverContentProps = RadixPopoverContentProps & {
    children: React.ReactNode | React.ReactElement[];
};
export declare function PopoverContent({ children, ...props }: PopoverContentProps): null;
