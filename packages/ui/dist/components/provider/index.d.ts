import { default as React, ReactNode } from 'react';
import { Theme } from '../../interface/index';
type Props = {
    theme: Theme;
    classname?: string;
    children: ReactNode;
    root?: boolean;
};
declare function Provider({ theme, children, classname, root }: Props): React.JSX.Element;
export default Provider;
