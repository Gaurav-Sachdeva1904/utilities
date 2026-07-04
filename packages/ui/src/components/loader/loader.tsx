import * as React from 'react';
import classNames from 'classnames';
import { SizeMap } from '@constants/size';
import { Size } from '@interface/index';

import '@components/loader/loader.scss';

export interface LoadingSpinnerProps {
    size?: Size;
    className?: string;
}

export default function LoadingSpinner({ size = 'M', className }: LoadingSpinnerProps) {
    const dimension = SizeMap[size];

    return (
        <span
            role="status"
            aria-live="polite"
            aria-label="Loading"
            className={classNames('ui-spinner', className)}
            style={{
                width: dimension,
                height: dimension,
            }}
        />
    );
}
