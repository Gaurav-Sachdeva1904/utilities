import React from 'react';

type PopoverContextType = {
    registerTrigger: (trigger: React.ReactElement) => void;
    registerContent: (content: React.ReactElement) => void;
};

export const PopoverContext = React.createContext<PopoverContextType | null>(null);

export function usePopoverContext() {
    const ctx = React.useContext(PopoverContext);
    if (!ctx) {
        throw new Error('Popover components must be used inside <Popover>');
    }
    return ctx;
}
