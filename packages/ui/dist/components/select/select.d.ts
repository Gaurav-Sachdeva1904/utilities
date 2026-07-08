import { default as React } from 'react';
import { IconName } from '../icon';
export type SelectItem = {
    key: string;
    value: string;
    icon?: IconName;
    disabled?: boolean;
};
export type SelectProps = {
    items: SelectItem[] | Array<Array<SelectItem>> | {
        [x: string]: SelectItem[];
    };
    label?: string;
    className?: string;
    defaultValue?: string;
    value?: string;
    disabled?: boolean;
    clearable?: boolean;
    clearLabel?: string;
    placeholder?: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
    onOpenChange?: (value: boolean) => void;
    onSelect?: (value: string | undefined) => void;
};
declare function Select(props: SelectProps): React.JSX.Element;
export default Select;
