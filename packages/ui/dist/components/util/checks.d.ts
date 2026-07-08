import { default as React } from 'react';
type WithDataProps = {
    [key: `data-${string}`]: unknown;
};
export declare function isValidElementWithProps(element: React.ReactNode): element is React.ReactElement<WithDataProps>;
export declare function safeCloneWithProps<P extends React.HTMLAttributes<HTMLElement>, T extends React.ReactElement<P>>(element: React.ReactNode, props: Partial<P>): T;
export {};
