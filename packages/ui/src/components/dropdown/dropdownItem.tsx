import React, { useCallback } from 'react';
import { Item as RadixItem } from '@radix-ui/react-dropdown-menu';
import { useDropdownContext } from '@components/dropdown/dropdownContext';

export type DropdownItemProps = {
    value: string;
} & React.ComponentPropsWithoutRef<typeof RadixItem>;

export const DropdownItem = React.forwardRef<HTMLDivElement, DropdownItemProps>(
    ({ value, onSelect, ...props }, ref) => {
        const { onSelect: parentOnSelect } = useDropdownContext();
        if (!parentOnSelect) {
            throw new Error('DropdownItem must be used within a Dropdown with onSelect prop');
        }
        const handleSelect = useCallback(
            (event: Event) => {
                onSelect?.(event);
                parentOnSelect?.(value);
            },
            [onSelect, parentOnSelect, value],
        );
        return (
            <RadixItem
                ref={ref}
                className={['dropdown-item', props.className].filter(Boolean).join(' ')}
                onSelect={handleSelect}
                {...props}
            />
        );
    },
);

DropdownItem.displayName = 'DropdownItem';
