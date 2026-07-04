import React from 'react';
import classNames from 'classnames';
import { Size } from '@interface/index';

import '@components/text/text.scss';

type Props = {
    text?: string;
    children?: string;
    size?: Size;
    className?: string;
};

function Text({ text, size = 'M', children, className = '' }: Props) {
    return (
        <span
            className={classNames('ui-text', {
                [className]: className,
                [`ui-text-size--${size}`]: size,
            })}>
            {children || text}
        </span>
    );
}

export default Text;
