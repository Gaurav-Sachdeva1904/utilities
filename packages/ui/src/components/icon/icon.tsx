import * as React from 'react';
import classNames from 'classnames';
import { iconMap, IconName } from '@components/icon/icons';
import { Size } from '@interface/index';

export type IconProps = {
    name: IconName;
    size?: Size | number;
    color?: string;
    className?: string;
    strokeWidth?: number;
};

const IconSizeMap: Record<Size | '2XL', number> = {
    XS: 12,
    S: 16,
    M: 20,
    L: 24,
    XL: 32,
    '2XL': 40,
};

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ name, size = 'S', color = 'var(--text-primary)', className, strokeWidth = 1.75 }, ref) => {
        const LucideIcon = iconMap[name];

        if (!LucideIcon) {
            if (process.env.NODE_ENV !== 'production') {
                console.warn(`[Icon]: Unknown icon name "${name}"`);
            }
            return null;
        }

        const iconSize = typeof size === 'number' ? size : IconSizeMap[size];

        return (
            <LucideIcon
                className={classNames('ui-icon', className)}
                ref={ref}
                size={iconSize}
                color={color}
                strokeWidth={strokeWidth}
                aria-hidden
            />
        );
    },
);

Icon.displayName = 'Icon';

export default Icon;
