import React from 'react';
import classNames from 'classnames';
import Icon, { IconName } from '@components/icon';
import { Size } from '@interface/index';

import '@components/tag/tag.scss';

export type TagProps = {
    className?: string;
    icon?: IconName;
    label: string;
    color?: string;
    size?: Size;
};

function Tag({ icon, label, color, size = 'M', className }: TagProps) {
    return (
        <div
            className={classNames('ui-tag', {
                [`ui-tag-size--${size}`]: size,
                [className!]: className,
            })}
            style={{
                backgroundColor: color || 'var(--gray-600)',
            }}>
            {icon && (
                <Icon
                    className={classNames('btn-icon')}
                    name={icon}
                    strokeWidth={1.5}
                    size={size}
                    color="#fff"
                />
            )}
            {label}
        </div>
    );
}

export default Tag;
