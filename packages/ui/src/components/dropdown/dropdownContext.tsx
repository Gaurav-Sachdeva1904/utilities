import React from 'react';

type DropdownContextType = {
    registerTrigger: (trigger: React.ReactElement) => void;
    registerContent: (content: React.ReactElement) => void;
    onSelect?: (value: string) => void;
    suppressInitialHighlight: boolean;
    releaseInitialHighlight: () => void;
};

export const DropdownContext = React.createContext<DropdownContextType | null>(null);

export function useDropdownContext() {
    const ctx = React.useContext(DropdownContext);
    if (!ctx) {
        throw new Error('Dropdown components must be used inside <Dropdown>');
    }
    return ctx;
}
