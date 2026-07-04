import React from 'react';

type WithDataProps = {
    [key: `data-${string}`]: unknown;
};

export function isValidElementWithProps(
    element: React.ReactNode,
): element is React.ReactElement<WithDataProps> {
    return React.isValidElement(element) && typeof element.props === 'object';
}

// Generic utility to safely clone a React element with additional props like className
export function safeCloneWithProps<
    P extends React.HTMLAttributes<HTMLElement>,
    T extends React.ReactElement<P>,
>(element: React.ReactNode, props: Partial<P>): T {
    if (!React.isValidElement<P>(element)) {
        throw new Error('Expected a valid ReactElement');
    }

    return React.cloneElement(element, {
        ...element.props,
        ...props,
    }) as T;
}
