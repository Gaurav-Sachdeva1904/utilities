import React from 'react';
import { DateRange, DayPicker, Matcher } from 'react-day-picker';
import { format } from 'date-fns';
import classNames from 'classnames';
import { Popover, Content, Trigger } from '@components/popover';
import Button from '@components/button';
import Icon from '@components/icon';
import { DatePickerProps } from '@components/date-picker/type';
import { useControllableDate } from '@components/date-picker/useControlledDate';
import {
    RangeDatePickerProps,
    SingleDatePickerProps,
    RangeDateValue,
    SingleDateValue,
} from '@components/date-picker/type';

import 'react-day-picker/dist/style.css';
import '@components/date-picker/datePicker.scss';

type OnSelect<T> = {
    value: T;
    setSelected: (t: T) => void;
    setOpen: (o: boolean) => void;
    required?: boolean;
    navLayout: 'around';
    disabled?: Matcher | Matcher[];
};

type RangePickerProps = OnSelect<DateRange | undefined> & {
    draftRange: DateRange | undefined;
    setDraftRange: (range: DateRange | undefined) => void;
};

function SingleDatePicker({
    value,
    setSelected,
    setOpen,
    required,
    ...props
}: OnSelect<Date | undefined>) {
    return (
        <DayPicker
            mode="single"
            className="rdp"
            selected={value}
            onSelect={(next: Date | undefined) => {
                setSelected(next);
                setOpen(false);
            }}
            required={required}
            {...props}
        />
    );
}

function RangeDatePicker({
    draftRange,
    setDraftRange,
    setSelected,
    setOpen,
    required,
    disabled,
    ...props
}: RangePickerProps) {
    return (
        <DayPicker
            mode="range"
            className="rdp"
            selected={draftRange}
            onSelect={(_range: DateRange | undefined, triggerDate: Date) => {
                const day = triggerDate;
                const currentFrom = draftRange?.from;
                const currentTo = draftRange?.to;

                if (currentTo || !currentFrom) {
                    setDraftRange({ from: day, to: undefined });
                    return;
                }

                if (day.getTime() < currentFrom.getTime()) {
                    setDraftRange({ from: day, to: undefined });
                    return;
                }

                const nextRange = { from: currentFrom, to: day };
                setDraftRange(nextRange);
                setSelected(nextRange);
                setOpen(false);
            }}
            required={required}
            excludeDisabled={!!disabled}
            {...props}
        />
    );
}

export function DatePicker(props: DatePickerProps) {
    const {
        mode = 'single',
        captionLayout = 'label',
        placeholder,
        disabled,
        required,
        disabledPicker,
        clearable = false,
        clearLabel = 'Clear date',
    } = props;

    const [open, setOpen] = React.useState(false);
    const isRange = mode === 'range';
    const isControlled = Object.prototype.hasOwnProperty.call(props, 'value');
    const rangeProps = props as RangeDatePickerProps;
    const singleProps = props as SingleDatePickerProps;
    const [selected, setSelected] = isRange
        ? useControllableDate<RangeDateValue>(
              rangeProps.value,
              rangeProps.defaultValue,
              rangeProps.onChange,
              isControlled,
          )
        : useControllableDate<SingleDateValue>(
              singleProps.value,
              singleProps.defaultValue,
              singleProps.onChange,
              isControlled,
          );

    let defaultPlaceholder = placeholder;

    if (!defaultPlaceholder) {
        if (mode === 'single') {
            defaultPlaceholder = 'dd/mm/yyyy';
        } else {
            defaultPlaceholder = 'dd/mm/yyyy - dd/mm/yyyy';
        }
    }

    const selectedRange = isRange ? (selected as RangeDateValue) : undefined;
    const selectedSingle = !isRange ? (selected as SingleDateValue) : undefined;
    const [draftRange, setDraftRange] = React.useState<RangeDateValue>(selectedRange);

    React.useEffect(() => {
        if (isRange && !open) {
            setDraftRange(selectedRange);
        }
    }, [isRange, open, selectedRange]);

    const label = isRange
        ? selectedRange?.from && selectedRange?.to
            ? `${format(selectedRange.from, 'dd/MM/yyyy')} – ${format(selectedRange.to, 'dd/MM/yyyy')}`
            : defaultPlaceholder
        : selectedSingle
          ? format(selectedSingle, 'dd/MM/yyyy')
          : defaultPlaceholder;

    let content;

    if (isRange) {
        const rangeContentProps = {
            navLayout: 'around' as const,
            disabled,
            setOpen,
            setSelected: setSelected as (value: RangeDateValue) => void,
            required,
            captionLayout,
            defaultMonth: selectedRange?.from ? new Date(selectedRange.from) : Date.now(),
        };

        content = (
            <RangeDatePicker
                value={selectedRange}
                draftRange={draftRange}
                setDraftRange={setDraftRange}
                {...rangeContentProps}
            />
        );
    } else {
        const singleContentProps = {
            navLayout: 'around' as const,
            disabled,
            setOpen,
            setSelected: setSelected as (value: SingleDateValue) => void,
            required,
            captionLayout,
            defaultMonth: selectedSingle ? new Date(selectedSingle) : Date.now(),
        };

        content = <SingleDatePicker value={selectedSingle} {...singleContentProps} />;
    }

    const hasValue = isRange
        ? Boolean(selectedRange?.from || selectedRange?.to)
        : Boolean(selectedSingle);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <Trigger>
                <div className="ui-date-control">
                    <div className={classNames('ui-date-trigger', { disabled: disabledPicker })}>
                        <input name="date-input" readOnly className="ui-date-input" value={label} />
                        <div className="icon">
                            <Icon name="calendar" strokeWidth={1.25} size={17} />
                        </div>
                    </div>
                    {clearable && hasValue ? (
                        <Button
                            className="date-clear-button"
                            ariaLabel={clearLabel}
                            quite
                            icon="x"
                            iconOnly
                            size="S"
                            onClick={e => {
                                e?.preventDefault();
                                e?.stopPropagation();
                                if (isRange) {
                                    setDraftRange(undefined);
                                    (setSelected as (value: RangeDateValue) => void)(undefined);
                                } else {
                                    (setSelected as (value: SingleDateValue) => void)(undefined);
                                }
                                setOpen(false);
                            }}>
                            {clearLabel}
                        </Button>
                    ) : null}
                </div>
            </Trigger>
            <Content className="ui-date-popover" align="start">
                {content}
            </Content>
        </Popover>
    );
}
