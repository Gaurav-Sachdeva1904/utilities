import React, { useEffect } from 'react';
import { Checkbox as RadixCheckbox } from 'radix-ui';
import Icon, { IconName } from '@components/icon';
import { Size } from '@interface/index';
import classNames from 'classnames';

import '@components/checkbox/checkbox.scss';

type CheckboxSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

type Props = {
    label?: string;
    value?: boolean;
    onChange?: (value: boolean) => void;
    size?: CheckboxSize;
};

const IconSizeMap: Record<CheckboxSize, number> = {
    XS: 12,
    S: 14,
    M: 16,
    L: 20,
    XL: 24,
};

const Checkbox = ({ label, value, onChange, size = 'M' }: Props) => {
    const [internalValue, setInternalValue] = React.useState(value || false);

    useEffect(() => {
        setInternalValue(value || false);
    }, [value]);

    const handleChange = (newValue: boolean) => {
        if (!value) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
    };

    return (
        <div
            className={classNames('ui-checkbox', { [`ui-checkbox-size--${size}`]: size })}
            style={{ display: 'flex', alignItems: 'center' }}>
            <RadixCheckbox.Root
                className="ui-checkbox-root"
                checked={internalValue}
                id="c1"
                onCheckedChange={handleChange}>
                <RadixCheckbox.Indicator className="ui-checkbox-indicator">
                    <Icon
                        size={IconSizeMap[size]}
                        strokeWidth={4}
                        name="check"
                        color="var(--gray-0)"
                    />
                </RadixCheckbox.Indicator>
            </RadixCheckbox.Root>
            <label className="ui-checkbox-label" htmlFor="c1">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
