import { default as React } from 'react';
type TextFieldType = 'text' | 'email' | 'password' | 'number';
export type TextFieldProps = {
    label?: string;
    type?: TextFieldType;
    defaultValue?: string;
    value?: string;
    isRequired?: boolean;
    className?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
};
declare function TextField({ label, type, className, value, defaultValue, isRequired, disabled, onChange, onBlur, }: TextFieldProps): React.JSX.Element;
export default TextField;
