import React, { ComponentProps } from 'react';
import classNames from 'classnames';

import '@components/card/card.scss';

type Props = ComponentProps<'div'>;

const Card = React.forwardRef<HTMLDivElement, Props>(
    ({ children, className = '', ...props }, ref) => {
        if (!children) {
            console.warn('Card component should have children');
            return null;
        }
        if (!Array.isArray(children)) {
            console.warn('Card component should have multiple children');
            children = [children];
        }
        const cardHeading = (children as React.ReactNode[]).find(
            child =>
                React.isValidElement(child) &&
                (child.type as React.ComponentType).displayName === 'CardHeader',
        );
        const content = (children as React.ReactNode[]).find(
            child =>
                React.isValidElement(child) &&
                (child.type as React.ComponentType).displayName === 'CardContent',
        );

        if (!cardHeading) {
            console.warn('Card component should have a CardHeader component as its child');
        }

        return (
            <div
                className={classNames('ui-card', {
                    [className]: className,
                })}
                ref={ref}
                {...props}>
                {cardHeading}
                {content}
            </div>
        );
    },
);

export default Card;
