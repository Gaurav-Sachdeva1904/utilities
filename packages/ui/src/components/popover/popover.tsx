import React, { ReactElement } from 'react';
import { Root, Portal } from '@radix-ui/react-popover';
import { PopoverContext } from '@components/popover/popoverContext';
import { useThemedPortal } from '@hooks/container';

export type PopoverProps = {
    open?: boolean;
    onOpenChange?: (value: boolean) => void;
    onClose?: (value: string) => void;
    children: React.ReactNode;
};

export function Popover({ children, onClose, open, onOpenChange }: PopoverProps) {
    const container = useThemedPortal();
    const [trigger, setTrigger] = React.useState<ReactElement | null>(null);
    const [content, setContent] = React.useState<ReactElement | null>(null);

    const value = React.useMemo(
        () => ({
            registerTrigger: setTrigger,
            registerContent: setContent,
        }),
        [],
    );

    return (
        <PopoverContext.Provider value={value}>
            <Root
                open={open}
                onOpenChange={(open: boolean) => {
                    if (onOpenChange) {
                        onOpenChange(open);
                    }
                    if (!open && onClose) {
                        onClose('');
                    }
                }}>
                {trigger}
                {content && <Portal container={container}>{content}</Portal>}
                {children}
            </Root>
        </PopoverContext.Provider>
    );
}
