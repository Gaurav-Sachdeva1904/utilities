import { default as React } from 'react';
type PopoverContextType = {
    registerTrigger: (trigger: React.ReactElement) => void;
    registerContent: (content: React.ReactElement) => void;
};
export declare const PopoverContext: React.Context<PopoverContextType | null>;
export declare function usePopoverContext(): PopoverContextType;
export {};
