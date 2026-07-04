import React from 'react';
import classNames from 'classnames';

import '@components/separator/separator.scss';

type Props = {
    width?: string;
    className?: string;
};

export default function Separator({ className = '', width = '100%' }: Props) {
    return (
        <div
            className={classNames('ui-separator', { [className]: className })}
            style={{ width }}></div>
    );
}
