import React, { ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { Button as RadixButton } from '@radix-ui/themes';
import Icon, { IconName } from '@components/icon';
import Loader from '@components/loader';
import { getSmallerSize } from '@components/util/size';
import { Size } from '@interface/index';
import { ButtonVariant } from '@interface/button';

import '@components/button/button.scss';

type Props = {
    children?: ReactNode;
    label?: string;
    ariaLabel?: string;
    className?: string;
    variant?: ButtonVariant;
    outline?: boolean;
    size?: Size;
    quite?: boolean;
    icon?: IconName;
    iconOnly?: boolean;
    disabled?: boolean;
    loading?: boolean;
    iconColor?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonProps = Props;

const IconColorMap: Record<ButtonVariant | 'quite', string> = {
    primary: 'var(--gray-50)',
    secondary: 'var(--gray-200)',
    negative: '#fff',
    accent: '#fff',
    link: 'var(--blue-700)',
    quite: 'var(--gray-800)',
};

const Button = (btnProps: Props) => {
    const {
        size = 'S',
        variant = 'primary',
        className = '',
        label,
        ariaLabel,
        quite,
        outline,
        icon,
        iconOnly,
        loading,
        children,
        ...props
    } = btnProps;

    let { iconColor: _iconColor } = btnProps;

    const smallerSize = useMemo(() => getSmallerSize(size), [size]);

    if (!_iconColor && icon) {
        _iconColor = IconColorMap[quite ? 'quite' : variant];
    }

    let content = (
        <>
            {icon && (
                <Icon
                    className={classNames('btn-icon')}
                    name={icon}
                    strokeWidth={1.5}
                    size={size}
                    color={_iconColor}
                />
            )}
            {(!iconOnly && children) || label}
        </>
    );

    if (loading) {
        content = <Loader size={smallerSize} />;
    }

    return (
        <RadixButton
            aria-label={ariaLabel}
            className={classNames('btn-container', {
                quite,
                outline,
                'icon-only': iconOnly,
                [className]: className,
                [`btn-container-size--${size}`]: size,
                [variant]: variant,
            })}
            {...props}>
            {content}
        </RadixButton>
    );
};

export default Button;
