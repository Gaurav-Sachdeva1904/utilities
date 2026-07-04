import { DateRange, Matcher } from 'react-day-picker';

export type SingleDateValue = Date | undefined;
export type RangeDateValue = DateRange | undefined;

export interface BaseDatePickerProps {
    placeholder?: string;
    disabled?: Matcher | Matcher[];
    required?: boolean;
    captionLayout?: 'labels' | 'dropdown';
    disabledPicker?: boolean;
    clearable?: boolean;
    clearLabel?: string;
}

export interface SingleDatePickerProps extends BaseDatePickerProps {
    mode?: 'single';
    value?: SingleDateValue;
    defaultValue?: SingleDateValue;
    onChange?: (date: SingleDateValue) => void;
}

export interface RangeDatePickerProps extends BaseDatePickerProps {
    mode: 'range';
    value?: RangeDateValue;
    defaultValue?: RangeDateValue;
    onChange?: (range: RangeDateValue) => void;
}

export type DatePickerProps = SingleDatePickerProps | RangeDatePickerProps;
