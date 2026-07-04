import * as React from 'react';
import { Trigger as RadixTrigger } from '@radix-ui/react-popover';
import { usePopoverContext } from '@components/popover/popoverContext';

export type PopoverTriggerProps = {
    children: React.ReactElement;
};

export const PopoverTrigger = React.forwardRef<HTMLElement, PopoverTriggerProps>(
    ({ children }, ref) => {
        const { registerTrigger } = usePopoverContext();
        const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;

        React.useEffect(() => {
            const trigger = (
                <RadixTrigger asChild>
                    {React.cloneElement(child, {
                        ...child.props,
                        className: [child.props.className, 'popover-trigger']
                            .filter(Boolean)
                            .join(' '),
                    })}
                </RadixTrigger>
            );
            registerTrigger(trigger);
        }, [children, ref, registerTrigger]);

        return null; // Trigger is rendered by Root after registration
    },
);

PopoverTrigger.displayName = 'PopoverTrigger';
