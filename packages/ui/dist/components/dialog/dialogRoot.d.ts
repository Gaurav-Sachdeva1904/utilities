import { default as React } from 'react';
import { DialogProps } from './dialogContext';
type DialogWrapperProps = {
    dialog: DialogProps;
};
export default function DialogRoot({ dialog: dialogData }: DialogWrapperProps): React.JSX.Element;
export {};
