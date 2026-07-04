import React, { useEffect } from 'react';
import classNames from 'classnames';

import '@components/table/table.scss';

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

export default function Table<T>({
    data,
    columns,
    className,
    multiSelect,
    allowSelection = false,
    render,
    onSelect,
}: TableProps<T>) {
    const [selectedRow, setSelected] = React.useState<Set<number>>(new Set());

    useEffect(() => {
        setSelected(new Set());
    }, [data.length]);

    const onRowClick = (index: number, disabled?: boolean) => {
        if (disabled || !allowSelection) return;

        const prev = selectedRow;
        let next = new Set<number>(prev);

        if (!multiSelect) {
            next = prev.has(index) ? new Set<number>() : new Set<number>([index]);
        } else {
            if (next.has(index)) next.delete(index);
            else next.add(index);
        }

        setSelected(next);

        if (onSelect) {
            onSelect(Array.from(next).map(i => data[i] as T));
        }
    };

    return (
        <div
            className={classNames('ui-table-wrapper', className, {
                ' disable-select': !allowSelection,
            })}>
            <table className="ui-table">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} style={{ width: col.width || '100%' }}>
                                <div>{col.header}</div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={classNames({
                                disabled: item.disabled,
                                selected: selectedRow.has(rowIndex),
                            })}
                            onClick={() => onRowClick(rowIndex, item.disabled)}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex}>
                                    <div>
                                        {render
                                            ? render(col.key, item)
                                            : String((item as T)[col.key])}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
