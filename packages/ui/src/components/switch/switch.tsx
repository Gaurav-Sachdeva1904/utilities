import React, { useEffect } from 'react';
import { Switch as RadixSwitch } from 'radix-ui';
import classNames from 'classnames';

import '@components/switch/switch.scss';

type SwitchSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

type Props = {
    className?: string;
    label?: string;
    size?: SwitchSize;
    onChange?: (value: boolean) => void;
    value?: boolean;
};

function Switch({ label, className = '', size = 'M', onChange, value }: Props) {
    const [internalValue, setInternalValue] = React.useState(value ?? false);

    useEffect(() => {
        setInternalValue(value ?? false);
    }, [value]);

    const handleChange = (newValue: boolean) => {
        if (value === undefined) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
    };

    return (
        <div
            className={classNames('ui-switch', {
                [`ui-switch-size--${size}`]: size,
                [className]: className,
            })}
            style={{ display: 'flex', alignItems: 'center' }}>
            <RadixSwitch.Root
                className="ui-switch-root"
                id="ui-switch-html"
                checked={internalValue}
                onCheckedChange={handleChange}>
                <RadixSwitch.Thumb className="ui-switch-thumb" />
            </RadixSwitch.Root>
            <label className="ui-switch-label" htmlFor="ui-switch-html">
                {label}
            </label>
        </div>
    );
}

export default Switch;
