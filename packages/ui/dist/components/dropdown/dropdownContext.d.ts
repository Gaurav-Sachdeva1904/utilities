import { default as React } from 'react';
type DropdownContextType = {
    registerTrigger: (trigger: React.ReactElement) => void;
    registerContent: (content: React.ReactElement) => void;
    onSelect?: (value: string) => void;
    suppressInitialHighlight: boolean;
    releaseInitialHighlight: () => void;
};
export declare const DropdownContext: React.Context<DropdownContextType | null>;
export declare function useDropdownContext(): DropdownContextType;
export {};
