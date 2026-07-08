import { default as React } from 'react';
type SwitchSize = 'XS' | 'S' | 'M' | 'L' | 'XL';
type Props = {
    className?: string;
    label?: string;
    size?: SwitchSize;
    onChange?: (value: boolean) => void;
    value?: boolean;
};
declare function Switch({ label, className, size, onChange, value }: Props): React.JSX.Element;
export default Switch;
