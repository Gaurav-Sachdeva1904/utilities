import { default as React, ReactNode } from 'react';
type Props = {
    theme: 'light' | 'dark';
    classname?: string;
    children: ReactNode;
    root?: boolean;
};
declare const StyleProvider: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default StyleProvider;
