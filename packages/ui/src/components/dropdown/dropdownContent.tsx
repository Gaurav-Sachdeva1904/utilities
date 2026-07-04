import * as React from 'react';
import { Content as RadixContent } from '@radix-ui/react-dropdown-menu';
import { useDropdownContext } from '@components/dropdown/dropdownContext';
import classNames from 'classnames';

type DropdownContentProps = {
    onSelect?: (value: string) => void;
    children: React.ReactNode | React.ReactElement[];
};

export function DropdownContent({ onSelect, children }: DropdownContentProps) {
    const { registerContent, suppressInitialHighlight, releaseInitialHighlight } =
        useDropdownContext();

    React.useEffect(() => {
        registerContent(
            <RadixContent
                className={classNames('dropdown-content', {
                    'suppress-initial-highlight': suppressInitialHighlight,
                })}
                sideOffset={4}
                side="bottom"
                alignOffset={32}
                collisionPadding={{ top: 12, bottom: 12, left: 12, right: 12 }}
                onPointerMove={releaseInitialHighlight}
                onKeyDown={releaseInitialHighlight}>
                {children}
            </RadixContent>,
        );
    }, [children, registerContent, releaseInitialHighlight, suppressInitialHighlight]);

    return null;
}
