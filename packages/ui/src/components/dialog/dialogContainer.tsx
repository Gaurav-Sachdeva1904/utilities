import React from 'react';
import { DialogContext, DialogProps } from '@components/dialog/dialogContext';
import Dialog from '@components/dialog/dialogRoot';

type DialogContainerProps = {
    children: React.ReactNode;
};

export default function DialogContainer({ children }: DialogContainerProps) {
    const [dialog, setDialog] = React.useState<DialogProps | null>(null);

    const value = React.useMemo(
        () => ({
            addDialog: (dialog: DialogProps) => setDialog(dialog),
            closeDialog: () => setDialog(null),
            isOpen: !!dialog,
        }),
        [dialog],
    );
    return (
        <>
            <DialogContext.Provider value={value}>
                {dialog !== null && <Dialog dialog={dialog} />}
                {children}
            </DialogContext.Provider>
        </>
    );
}
