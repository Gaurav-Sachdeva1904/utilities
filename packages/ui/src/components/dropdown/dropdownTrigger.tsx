import * as React from 'react';
import { Trigger as RadixTrigger } from '@radix-ui/react-dropdown-menu';
import { useDropdownContext } from '@components/dropdown/dropdownContext';

type TriggerProps = {
    children: React.ReactElement;
};

export const DropdownTrigger = React.forwardRef<HTMLElement, TriggerProps>(({ children }, ref) => {
    const { registerTrigger } = useDropdownContext();
    const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;

    React.useEffect(() => {
        const trigger = (
            <RadixTrigger asChild>
                {React.cloneElement(child, {
                    ...child.props,
                    className: [child.props.className, 'dropdown-trigger']
                        .filter(Boolean)
                        .join(' '),
                })}
            </RadixTrigger>
        );
        registerTrigger(trigger);
    }, [children, ref, registerTrigger]);

    return null; // Trigger is rendered by Root after registration
});

DropdownTrigger.displayName = 'DropdownTrigger';
