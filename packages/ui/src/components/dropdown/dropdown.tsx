import React, { ReactElement } from 'react';
import { Root, Portal } from '@radix-ui/react-dropdown-menu';
import { DropdownContext } from '@components/dropdown/dropdownContext';
import { useThemedPortal } from '@hooks/container';
import { useInitialHighlightSuppression } from '@hooks/initialHighlight';

export type DropdownProps = {
    onSelect?: (value: string) => void;
    children: React.ReactNode;
};

export function Dropdown({ onSelect, children }: DropdownProps) {
    const container = useThemedPortal();
    const [trigger, setTrigger] = React.useState<ReactElement | null>(null);
    const [content, setContent] = React.useState<ReactElement | null>(null);
    const { suppressInitialHighlight, handleOpenChange, releaseInitialHighlight } =
        useInitialHighlightSuppression();

    const value = React.useMemo(
        () => ({
            registerTrigger: setTrigger,
            registerContent: setContent,
            onSelect,
            suppressInitialHighlight,
            releaseInitialHighlight,
        }),
        [onSelect, releaseInitialHighlight, suppressInitialHighlight],
    );

    return (
        <DropdownContext.Provider value={value}>
            <Root onOpenChange={handleOpenChange}>
                {trigger}
                {content && <Portal container={container}>{content}</Portal>}
                {children}
            </Root>
        </DropdownContext.Provider>
    );
}
