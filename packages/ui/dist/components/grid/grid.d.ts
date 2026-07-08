import { default as React } from 'react';
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
export declare const Item: React.ForwardRefExoticComponent<GridItemProps & React.RefAttributes<HTMLDivElement>>;
export declare const Grid: React.FC<GridProps>;
