import { default as React, ReactNode } from 'react';
export type DialogProps = {
    onOpenChange: (open: boolean) => void;
    dialog: ReactNode;
    closeOnBackdropClick?: boolean;
};
type DialogContextType = {
    addDialog: (dialog: DialogProps) => void;
    closeDialog: () => void;
    isOpen: boolean;
};
export declare const DialogContext: React.Context<DialogContextType | null>;
export declare function useDialogContext(): DialogContextType;
export {};
