import React from 'react';
import { Separator as RadixSeparator } from '@radix-ui/react-dropdown-menu';

export const DropdownSeparator = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof RadixSeparator>
>((props, ref) => {
    return (
        <RadixSeparator
            ref={ref}
            className={['dropdown-separator', props.className].filter(Boolean).join(' ')}
            {...props}
        />
    );
});

DropdownSeparator.displayName = 'DropdownSeparator';
