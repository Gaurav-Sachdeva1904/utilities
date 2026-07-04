import React, { useEffect, useRef, useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import classNames from 'classnames';
import { Popover, Trigger, Content } from '@components/popover';
import { RadioGroup } from '@components/radio';
import Tabs from '@components/tabs';
import TextField from '@components/textfield';
import { themeColorTokens } from '@styles/theme/generatedThemeColors';

import '@components/color-picker/colorPicker.scss';

export type ColorPickerProps = {
    value?: string;
    onColorSelect: (color: string) => void;
};

type ThemeColorOption = {
    key: string;
    label: string;
    cssVar: string;
    resolvedValue: string;
};

const DEFAULT_COLOR = '#ffffff';

function normalizeColor(value?: string) {
    return value?.trim().toLowerCase() || '';
}

function normalizeThemeToken(value?: string) {
    return value
        ?.trim()
        .toLowerCase()
        .replace(/^var\(--/, '')
        .replace(/^--/, '')
        .replace(/\)$/, '');
}

function getDisplayColor(value: string, themeColors: ThemeColorOption[]) {
    const normalizedToken = normalizeThemeToken(value);
    const themeColor = themeColors.find(option => option.key === normalizedToken);

    if (themeColor) {
        return `var(${themeColor.cssVar})`;
    }

    return value || DEFAULT_COLOR;
}

function getDisplayLabel(value: string, themeColors: ThemeColorOption[]) {
    const normalizedToken = normalizeThemeToken(value);
    const themeColor = themeColors.find(option => option.key === normalizedToken);

    if (themeColor) {
        return themeColor.label;
    }

    return value || 'Custom Hex Color';
}

function CustomColorInput({
    value,
    displayValue,
    setValue,
}: {
    value: string;
    displayValue?: string;
    setValue: (val: string) => void;
}) {
    const [focused, setFocused] = useState(false);

    if (focused) {
        return (
            <TextField
                className="color-textfield"
                value={value}
                onChange={setValue}
                onBlur={() => setFocused(false)}
            />
        );
    }

    return (
        <div className="custom-color-input" onClick={() => setFocused(true)}>
            {displayValue || value || 'Custom Hex Color'}
        </div>
    );
}

function ColorPicker({ value, onColorSelect }: ColorPickerProps) {
    const [color, setColor] = useState(value || DEFAULT_COLOR);
    const [open, setOpen] = useState(false);
    const shouldCommitOnCloseRef = useRef(true);
    const [pickerMode, setPickerMode] = useState(() =>
        normalizeThemeToken(value) || value === undefined ? 'theme' : 'custom',
    );

    useEffect(() => {
        setColor(value || DEFAULT_COLOR);
        if (value !== undefined) {
            setPickerMode(normalizeThemeToken(value) ? 'theme' : 'custom');
        }
    }, [value]);

    useEffect(() => {
        if (open) {
            shouldCommitOnCloseRef.current = true;
        }
    }, [open]);

    const themeColors =
        typeof document === 'undefined'
            ? []
            : (() => {
                  const provider =
                      document.querySelector<HTMLElement>(
                          '.ui-provider.ui-light, .ui-provider.ui-dark',
                      ) ?? document.body;
                  const styles = window.getComputedStyle(provider);

                  return Object.values(themeColorTokens).map(option => ({
                      ...option,
                      resolvedValue: styles.getPropertyValue(option.cssVar).trim() || DEFAULT_COLOR,
                  }));
              })();

    const normalizedColor = normalizeColor(color);
    const normalizedThemeToken = normalizeThemeToken(color);
    const selectedThemeColor = themeColors.find(
        option =>
            option.key === normalizedThemeToken ||
            normalizeColor(option.resolvedValue) === normalizedColor,
    );
    const previewColor = getDisplayColor(color, themeColors);
    const previewLabel = getDisplayLabel(color, themeColors);

    return (
        <div className="color-picker">
            <Popover
                open={open}
                onOpenChange={setOpen}
                onClose={() => {
                    if (shouldCommitOnCloseRef.current) {
                        onColorSelect(color);
                    }
                }}>
                <Trigger>
                    <div className={classNames('color-picker-trigger')}>
                        <div className="color-swatch">
                            <div
                                className="color-tile"
                                style={{ backgroundColor: previewColor }}></div>
                            <span>{previewLabel}</span>
                        </div>
                    </div>
                </Trigger>
                <Content align="start" alignOffset={4}>
                    <div className="color-picker-content">
                        <div className="selected-color">
                            <div
                                className="color-preview"
                                style={{ backgroundColor: previewColor }}
                            />
                            <CustomColorInput
                                value={color}
                                displayValue={previewLabel}
                                setValue={setColor}
                            />
                        </div>
                        <Tabs
                            className="color-picker-tabs"
                            size="S"
                            value={pickerMode}
                            onSelect={setPickerMode}
                            tabs={[
                                { key: 'Theme', value: 'theme' },
                                { key: 'Custom', value: 'custom' },
                            ]}
                        />
                        {pickerMode === 'theme' ? (
                            <RadioGroup
                                className="theme-color-grid"
                                size="S"
                                value={selectedThemeColor?.key}
                                onChange={selectedKey => {
                                    const selectedOption = themeColors.find(
                                        option => option.key === selectedKey,
                                    );
                                    if (selectedOption) {
                                        const nextColor = selectedOption.key;
                                        shouldCommitOnCloseRef.current = false;
                                        setPickerMode('theme');
                                        setColor(nextColor);
                                        onColorSelect(nextColor);
                                        setOpen(false);
                                    }
                                }}
                                items={themeColors.map(option => ({
                                    value: option.key,
                                    label: (
                                        <span className="theme-color-option-label">
                                            <span className="theme-color-option-name">
                                                {option.label}
                                            </span>
                                            <span className="theme-color-option-swatch-wrap">
                                                <span
                                                    className="theme-color-option-swatch"
                                                    style={{
                                                        backgroundColor: `var(${option.cssVar})`,
                                                    }}
                                                />
                                            </span>
                                        </span>
                                    ),
                                }))}
                            />
                        ) : (
                            <HexAlphaColorPicker
                                className="custom-color-picker"
                                color={previewColor}
                                onChange={nextColor => {
                                    setPickerMode('custom');
                                    setColor(nextColor);
                                }}
                            />
                        )}
                    </div>
                </Content>
            </Popover>
        </div>
    );
}

export default ColorPicker;
