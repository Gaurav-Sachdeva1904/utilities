import * as React from 'react';
import { Content as RadixContent } from '@radix-ui/react-popover';
import type { PopoverContentProps as RadixPopoverContentProps } from '@radix-ui/react-popover';
import { usePopoverContext } from '@components/popover/popoverContext';
import classNames from 'classnames';

export type PopoverContentProps = RadixPopoverContentProps & {
    children: React.ReactNode | React.ReactElement[];
};

export function PopoverContent({ children, ...props }: PopoverContentProps) {
    const { registerContent } = usePopoverContext();
    const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
    const childClass = child?.props?.className || '';

    React.useEffect(() => {
        registerContent(
            <RadixContent
                className={classNames('popover-content', {
                    [childClass]: child.props.className,
                })}
                align="start"
                side="bottom"
                alignOffset={4}
                sideOffset={4}
                collisionPadding={{ top: 12, bottom: 12, left: 12, right: 12 }}
                {...props}>
                {children}
            </RadixContent>,
        );
    }, [children, registerContent]);

    return null;
}
