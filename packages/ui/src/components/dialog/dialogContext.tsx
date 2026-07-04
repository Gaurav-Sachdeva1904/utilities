import React, { ReactNode } from 'react';

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

export const DialogContext = React.createContext<DialogContextType | null>(null);

export function useDialogContext() {
    const ctx = React.useContext(DialogContext);
    if (!ctx) {
        throw new Error('Dialog components must be used inside <DialogContainer>');
    }
    return ctx;
}
