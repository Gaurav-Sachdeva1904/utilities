import { default as React } from 'react';
import { Size } from '../../interface/index';
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
declare function Radio({ className, label, size, value, checked, disabled, name, accentColor, onChange, }: RadioProps): React.JSX.Element;
declare function RadioGroup(props: RadioGroupProps): React.JSX.Element;
export { RadioGroup };
export default Radio;
