import React, { useEffect } from 'react';
import classNames from 'classnames';
import * as RadixTabs from '@radix-ui/react-tabs';
import { Size } from '@interface/index';

import '@components/tabs/tabs.scss';

export type TabItem = {
    key: string;
    value: string;
    disabled?: boolean;
};

export type TabsProps = {
    tabs: TabItem[];
    value?: string;
    defaultValue?: string;
    size?: Size;
    className?: string;
    onSelect?: (value: string) => void;
};

function Tabs(props: TabsProps) {
    const { tabs, value, defaultValue, size = 'M', className, onSelect } = props;
    const isControlled = Object.prototype.hasOwnProperty.call(props, 'value');
    const firstEnabledTab = tabs.find(tab => !tab.disabled);
    const fallbackValue = defaultValue ?? firstEnabledTab?.value ?? '';
    const [internalValue, setInternalValue] = React.useState(value ?? fallbackValue);
    const selectedValue = isControlled ? (value ?? fallbackValue) : internalValue;

    useEffect(() => {
        if (isControlled) {
            return;
        }

        const nextTabExists = tabs.some(tab => tab.value === internalValue && !tab.disabled);
        if (!nextTabExists) {
            setInternalValue(fallbackValue);
        }
    }, [fallbackValue, internalValue, isControlled, tabs]);

    const handleValueChange = (nextValue: string) => {
        if (!isControlled) {
            setInternalValue(nextValue);
        }
        onSelect?.(nextValue);
    };

    return (
        <RadixTabs.Root
            className={classNames('ui-tabs', {
                [`ui-tabs-size--${size}`]: size,
                [className!]: className,
            })}
            value={selectedValue}
            onValueChange={handleValueChange}>
            <RadixTabs.List className="ui-tabs-list" aria-label="Tabs">
                {tabs.map(tab => (
                    <RadixTabs.Trigger
                        key={tab.value}
                        className="ui-tabs-trigger"
                        value={tab.value}
                        disabled={tab.disabled}>
                        {tab.key}
                    </RadixTabs.Trigger>
                ))}
            </RadixTabs.List>
        </RadixTabs.Root>
    );
}

export default Tabs;
