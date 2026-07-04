import React, { ComponentProps } from 'react';
import classNames from 'classnames';

import '@components/container/container.scss';

export type ContainerProps = ComponentProps<'div'>;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ children, className = '', ...props }, ref) => {
        return (
            <div
                className={classNames('ui-container', {
                    [className]: className,
                })}
                ref={ref}
                {...props}>
                {children}
            </div>
        );
    },
);

export default Container;
