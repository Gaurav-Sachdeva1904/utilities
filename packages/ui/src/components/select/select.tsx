import React, { useMemo } from 'react';
import classNames from 'classnames';
import {
    Root,
    Portal,
    Trigger,
    Value,
    Icon as RadixIcon,
    Content,
    Group,
    Item as RadixItem,
    Label as SelectGroupLabel,
    Separator,
    ItemText,
    ItemIndicator,
} from '@radix-ui/react-select';
import { Label as RadixLabel } from 'radix-ui';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Button from '@components/button';
import Icon, { IconName } from '@components/icon';

import '@components/select/select.scss';
import { useThemedPortal } from '@hooks/container';
import { useInitialHighlightSuppression } from '@hooks/initialHighlight';

export type SelectItem = {
    key: string;
    value: string;
    icon?: IconName;
    disabled?: boolean;
};

export type SelectProps = {
    items: SelectItem[] | Array<Array<SelectItem>> | { [x: string]: SelectItem[] };
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

const SelectItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof RadixItem>
>(({ children, className, ...props }, forwardedRef) => {
    return (
        <RadixItem className={classNames('select-item', className)} {...props} ref={forwardedRef}>
            <ItemText>{children}</ItemText>
            <ItemIndicator className="select-item-indicator">
                <Icon name="check" size="S" />
            </ItemIndicator>
        </RadixItem>
    );
});

function Select(props: SelectProps) {
    const {
        items,
        label,
        placeholder = 'Select...',
        className = '',
        value,
        defaultValue,
        position,
        disabled,
        clearable = false,
        clearLabel = 'Clear selection',
        onOpenChange,
        onSelect,
    } = props;
    const EMPTY_VALUE = '';
    const selectId = React.useId();
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const container = useThemedPortal();
    const { suppressInitialHighlight, handleOpenChange, releaseInitialHighlight } =
        useInitialHighlightSuppression();
    const isControlled = Object.prototype.hasOwnProperty.call(props, 'value');
    const selectedValue = isControlled ? (value ?? EMPTY_VALUE) : (internalValue ?? EMPTY_VALUE);

    const parsedItems = useMemo(() => {
        const groups: string[] = [];
        let menuItems: Array<Array<SelectItem>> = [];
        if (Array.isArray(items)) {
            if (Array.isArray(items[0])) {
                menuItems = items as Array<Array<SelectItem>>;
            } else {
                menuItems = [items] as Array<Array<SelectItem>>;
            }
        } else {
            Object.entries(items).forEach(([key, value]) => {
                groups.push(key);
                menuItems.push(value);
            });
        }

        return { menuItems, groups };
    }, [items]);

    const handleValueChange = (nextValue: string) => {
        if (!isControlled) {
            setInternalValue(nextValue);
        }
        onSelect?.(nextValue === EMPTY_VALUE ? undefined : nextValue);
    };

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (!isControlled) {
            setInternalValue(EMPTY_VALUE);
        }
        onSelect?.(undefined);
    };

    const renderGroups = () => {
        const renderedGroups = parsedItems.menuItems.map((menuItem, index) => {
            if (parsedItems.groups[index]) {
                return (
                    <React.Fragment key={`group-${parsedItems.groups[index]}`}>
                        <Group>
                            <SelectGroupLabel className="select-label">
                                {parsedItems.groups[index]}
                            </SelectGroupLabel>
                            {menuItem.map(item => (
                                <SelectItem
                                    key={item.value}
                                    value={item.value}
                                    disabled={item.disabled}>
                                    <div className="item-content">
                                        {item.icon && <Icon name={item.icon} size="XS" />}
                                        <span>{item.key}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </Group>
                        {index < parsedItems.groups.length - 1 && (
                            <Separator className="select-separator" />
                        )}
                    </React.Fragment>
                );
            }

            return (
                <React.Fragment key={`group-${index}`}>
                    {menuItem.map(item => (
                        <SelectItem key={item.value} value={item.value} disabled={item.disabled}>
                            <div className="item-content">
                                {item.icon && <Icon name={item.icon} size="XS" />}
                                <span>{item.key}</span>
                            </div>
                        </SelectItem>
                    ))}

                    {index < parsedItems.menuItems.length - 1 && (
                        <Separator className="select-separator" />
                    )}
                </React.Fragment>
            );
        });
        return <>{renderedGroups}</>;
    };

    return (
        <div className={classNames('ui-select', { [className]: className })}>
            {label && (
                <RadixLabel.Root htmlFor={selectId} asChild>
                    <div className="select-field-label">{label}</div>
                </RadixLabel.Root>
            )}
            <Root
                value={selectedValue}
                disabled={disabled}
                onOpenChange={open => {
                    handleOpenChange(open);
                    onOpenChange?.(open);
                }}
                onValueChange={handleValueChange}>
                <div className="select-control">
                    <Trigger id={selectId} className="select-trigger">
                        <Value placeholder={placeholder} />
                        <RadixIcon className="select-icon">
                            <ChevronDownIcon />
                        </RadixIcon>
                    </Trigger>
                    {clearable && selectedValue ? (
                        <Button
                            className="select-clear-button"
                            ariaLabel={clearLabel}
                            quite
                            icon="x"
                            iconOnly
                            size="S"
                            onClick={handleClear}></Button>
                    ) : null}
                </div>
                <Portal container={container}>
                    <Content
                        side={position}
                        className={classNames('select-content', {
                            'suppress-initial-highlight': suppressInitialHighlight,
                        })}
                        position="popper"
                        sideOffset={4}
                        onPointerMove={releaseInitialHighlight}
                        onKeyDown={releaseInitialHighlight}>
                        {parsedItems.menuItems.length > 0 ? renderGroups() : null}
                    </Content>
                </Portal>
            </Root>
        </div>
    );
}

export default Select;
