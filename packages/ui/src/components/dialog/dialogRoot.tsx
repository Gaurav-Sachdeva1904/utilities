import React from 'react';
import { Root, Portal, Overlay, Content } from '@radix-ui/react-dialog';
import { DialogProps, useDialogContext } from '@components/dialog/dialogContext';
import { Dialog } from '@components/dialog';
import { useThemedPortal } from '@hooks/container';
import { PortalContainerContext } from '@hooks/portalContainer';

type DialogWrapperProps = {
    dialog: DialogProps;
};

export default function DialogRoot({ dialog: dialogData }: DialogWrapperProps) {
    const container = useThemedPortal();
    const [dialogContainer, setDialogContainer] = React.useState<HTMLElement | undefined>(
        undefined,
    );
    const { closeDialog, isOpen } = useDialogContext();
    const { dialog, onOpenChange, closeOnBackdropClick } = dialogData;

    return (
        <PortalContainerContext.Provider value={dialogContainer}>
            <Root open={isOpen} onOpenChange={onOpenChange}>
                <Portal container={container}>
                    <Overlay
                        className="overlay"
                        onPointerDown={e => {
                            if (closeOnBackdropClick) {
                                closeDialog();
                            }
                        }}
                    />
                    <Content
                        ref={node => setDialogContainer(node ?? undefined)}
                        className="dialog-container">
                        {dialog}
                    </Content>
                </Portal>
            </Root>
        </PortalContainerContext.Provider>
    );
}
