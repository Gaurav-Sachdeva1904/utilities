import React, { useState } from 'react';
import { Label as RadixLabel } from 'radix-ui';
import classnames from 'classnames';

import '@components/textfield/textfield.scss';

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

let TEXT_RAND_SUFFIX = 0;

function TextField({
    label,
    type = 'text',
    className = '',
    value,
    defaultValue,
    isRequired,
    disabled,
    onChange,
    onBlur,
}: TextFieldProps) {
    const htmlFor = `textfield-${TEXT_RAND_SUFFIX++}`;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [isValid, setIsValid] = useState(true);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (isRequired && (!val || val === '')) {
            setIsValid(false);
            // inputRef?.current?.focus();
        }
        if (onBlur) {
            onBlur(val);
        }
    };

    return (
        <div className={classnames('textfield-container', { [className]: className, disabled })}>
            {label && (
                <RadixLabel.Root htmlFor={htmlFor} asChild>
                    <div className="textfield-label">
                        {label}
                        {isRequired && <span className="required-astrik">*</span>}
                    </div>
                </RadixLabel.Root>
            )}
            <input
                ref={inputRef}
                className="input"
                type={type}
                id={htmlFor}
                defaultValue={defaultValue}
                value={value}
                onBlur={handleBlur}
                onChange={e => {
                    const val = e.target.value;
                    e.preventDefault();
                    e.stopPropagation();

                    if (val != '') {
                        setIsValid(true);
                    }

                    if (onChange) {
                        onChange(e.target.value as TextFieldType);
                    }
                }}
            />
            {!isValid && <span className="error">Required field is empty</span>}
        </div>
    );
}

export default TextField;
