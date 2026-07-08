import { default as React } from 'react';
type CheckboxSize = 'XS' | 'S' | 'M' | 'L' | 'XL';
type Props = {
    label?: string;
    value?: boolean;
    onChange?: (value: boolean) => void;
    size?: CheckboxSize;
};
declare const Checkbox: ({ label, value, onChange, size }: Props) => React.JSX.Element;
export default Checkbox;
