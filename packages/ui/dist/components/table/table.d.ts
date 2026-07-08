import { default as React } from 'react';
export type TableRow<T> = T & {
    disabled?: boolean;
};
export type TableColumn<T> = {
    header: string;
    key: keyof T;
    width?: string | number;
};
export type TableProps<T> = {
    data: Array<TableRow<T>>;
    columns: TableColumn<T>[];
    className?: string;
    multiSelect?: boolean;
    allowSelection?: boolean;
    render?: (key: keyof T, item: T) => React.ReactNode;
    onSelect?: (items: T[]) => void;
};
export default function Table<T>({ data, columns, className, multiSelect, allowSelection, render, onSelect, }: TableProps<T>): React.JSX.Element;
