import React, { forwardRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import '@styles/boilerplate.scss';
import '@components/provider/provider.scss';

type Props = {
    theme: 'light' | 'dark';
    classname?: string;
    children: ReactNode;
    root?: boolean;
};

const StyleProvider = forwardRef<HTMLDivElement, Props>(
    ({ theme = 'light', classname = '', children, root = false }, ref) => {
        const content = (
            <div
                ref={ref}
                className={classNames(
                    'ui-provider',
                    {
                        'ui-light': theme === 'light',
                        'ui-dark': theme === 'dark',
                    },
                    classname,
                )}>
                {children}
            </div>
        );

        if (root && typeof document !== 'undefined') {
            return createPortal(content, document.body);
        }

        return content;
    },
);

StyleProvider.displayName = 'StyleProvider';

export default StyleProvider;
