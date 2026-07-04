import React from 'react';
import { Title, Description, Close } from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Button from '@components/button';
import { useDialogContext } from '@components/dialog/dialogContext';
import { ButtonProps } from '@components/button/button';

type Props<T> = {
    title: string;
    description?: string;
    content: React.ReactNode;
    showDismiss?: boolean;
    stopDimissOnCta?: boolean;
    ctaList: Array<ButtonProps & { actionId: T }>;
    onAction?: (actionId: T) => void;
};

function Dialog({
    title,
    description,
    content,
    ctaList,
    onAction,
    showDismiss,
    stopDimissOnCta,
}: Props<string | unknown>) {
    const { closeDialog } = useDialogContext();
    return (
        <>
            <Title asChild>
                <h2 className="dialog-heading">{title}</h2>
            </Title>
            <Description asChild>
                <p className="dialog-description">{description}</p>
            </Description>
            {content}
            <div className="dialog-footer">
                {ctaList?.length > 0 && (
                    <Button
                        onClick={() => {
                            if (onAction) {
                                onAction(ctaList[0].actionId);
                            }
                            if (!stopDimissOnCta) {
                                closeDialog();
                            }
                        }}
                        {...ctaList[0]}
                    />
                )}
                {ctaList?.length > 1 && (
                    <Button
                        variant="primary"
                        label={ctaList[1].label}
                        outline
                        onClick={() => {
                            if (onAction) {
                                onAction(ctaList[1].actionId);
                            }
                            if (!stopDimissOnCta) {
                                closeDialog();
                            }
                        }}
                    />
                )}
            </div>
            {showDismiss && (
                <Close asChild>
                    <Button
                        variant="primary"
                        className="close-btn"
                        onClick={() => closeDialog()}
                        quite>
                        <Cross2Icon color="var(--text-primary)" />
                    </Button>
                </Close>
            )}
        </>
    );
}

export default Dialog;
