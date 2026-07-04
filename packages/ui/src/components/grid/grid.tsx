import React from 'react';
import classNames from 'classnames';

export interface GridProps {
    children: React.ReactNode;
    className?: string;
    type?: 'default' | 'dense';
    rGap?: number | string;
    cGap?: number | string;
}

export interface GridItemProps {
    children: React.ReactNode;
    className?: string;
    rowSpan?: number;
    colSpan?: number;
    style: React.CSSProperties;
}

export const Item = React.forwardRef<HTMLDivElement, GridItemProps>(
    ({ children, className, rowSpan, colSpan, style }, ref) => {
        return (
            <div
                ref={ref}
                className={classNames('ui-grid-item', className || '')}
                style={{
                    ...style,
                    gridColumn: colSpan ? `span ${colSpan}` : undefined,
                    gridRow: rowSpan ? `span ${rowSpan}` : undefined,
                }}>
                {children}
            </div>
        );
    },
);

export const Grid: React.FC<GridProps> = ({
    children,
    className = '',
    type = 'default',
    rGap,
    cGap,
}) => {
    // const gridClassName = `${type === 'dense' ? 'grid-dense' : ''} ${className || ''}`;
    return (
        <div
            className={classNames('ui-grid', { [className]: !!className })}
            style={{ gridRowGap: rGap, gridColumnGap: cGap }}>
            {children}
        </div>
    );
};
