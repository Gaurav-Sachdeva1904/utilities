import { default as React } from 'react';
import { Size } from '../../interface/index';
type Props = {
    text?: string;
    children?: string;
    size?: Size;
    className?: string;
};
declare function Text({ text, size, children, className }: Props): React.JSX.Element;
export default Text;
