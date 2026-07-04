import React, { useEffect } from 'react';
import { RadioGroup as RadixRadioGroup } from 'radix-ui';
import classNames from 'classnames';
import { Size } from '@interface/index';

import '@components/radio/radio.scss';

export type RadioOption = {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
    accentColor?: string;
};

export type RadioProps = {
    className?: string;
    label?: React.ReactNode;
    size?: Size;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    accentColor?: string;
    onChange?: (checked: boolean, value: string) => void;
};

export type RadioGroupProps = {
    className?: string;
    name?: string;
    size?: Size;
    value?: string;
    defaultValue?: string;
    items: RadioOption[];
    onChange?: (value: string) => void;
};

type RadioItemProps = Pick<
    RadioProps,
    'className' | 'label' | 'size' | 'value' | 'disabled' | 'accentColor'
>;

function RadioItem({
    className = '',
    label,
    size = 'M',
    value,
    disabled,
    accentColor,
}: RadioItemProps) {
    return (
        <label
            className={classNames('ui-radio', `ui-radio-size--${size}`, className, {
                'ui-radio-disabled': disabled,
            })}
            style={
                accentColor
                    ? ({
                          ['--ui-radio-accent-color' as string]: accentColor,
                      } as React.CSSProperties)
                    : undefined
            }>
            <RadixRadioGroup.Item className="ui-radio-root" value={value} disabled={disabled}>
                <RadixRadioGroup.Indicator className="ui-radio-indicator" />
            </RadixRadioGroup.Item>
            {label ? <span className="ui-radio-label">{label}</span> : null}
        </label>
    );
}

function Radio({
    className = '',
    label,
    size = 'M',
    value,
    checked = false,
    disabled,
    name,
    accentColor,
    onChange,
}: RadioProps) {
    const selectedValue = checked ? value : '';

    return (
        <RadixRadioGroup.Root
            className="ui-radio-group"
            name={name}
            value={selectedValue}
            onValueChange={newValue => onChange?.(newValue === value, newValue)}>
            <RadioItem
                className={className}
                label={label}
                value={value}
                disabled={disabled}
                accentColor={accentColor}
                size={size}
            />
        </RadixRadioGroup.Root>
    );
}

function RadioGroup(props: RadioGroupProps) {
    const { className = '', name, size = 'M', value, defaultValue, items, onChange } = props;
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const isControlled = Object.prototype.hasOwnProperty.call(props, 'value');

    useEffect(() => {
        if (isControlled) {
            setInternalValue(value);
        }
    }, [isControlled, value]);

    const selectedValue = isControlled ? value : internalValue;

    const handleValueChange = (newValue: string) => {
        if (!isControlled) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
    };

    return (
        <RadixRadioGroup.Root
            className={classNames('ui-radio-group', className)}
            name={name}
            value={selectedValue}
            defaultValue={defaultValue}
            onValueChange={handleValueChange}>
            {items.map(item => (
                <RadioItem
                    key={item.value}
                    label={item.label}
                    value={item.value}
                    disabled={item.disabled}
                    accentColor={item.accentColor}
                    size={size}
                />
            ))}
        </RadixRadioGroup.Root>
    );
}

export { RadioGroup };
export default Radio;
