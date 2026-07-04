import React, { ReactNode, useRef } from 'react';
import { Provider as ToastProvider } from '@radix-ui/react-toast';
import StyleProvider from '@components/provider/styleProvider';
import { DialogContainer } from '@components/dialog';
import { Theme } from '@interface/index';

type Props = {
    theme: Theme;
    classname?: string;
    children: ReactNode;
    root?: boolean;
};

function Provider({ theme, children, classname, root }: Props) {
    const uiRef = useRef(null);
    return (
        <>
            <StyleProvider classname={classname} ref={uiRef} theme={theme} root={root}>
                <DialogContainer>
                    <ToastProvider>{children}</ToastProvider>
                </DialogContainer>
            </StyleProvider>
        </>
    );
}

export default Provider;
