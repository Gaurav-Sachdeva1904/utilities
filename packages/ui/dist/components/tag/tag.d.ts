import { default as React } from 'react';
import { IconName } from '../icon';
import { Size } from '../../interface/index';
export type TagProps = {
    className?: string;
    icon?: IconName;
    label: string;
    color?: string;
    size?: Size;
};
declare function Tag({ icon, label, color, size, className }: TagProps): React.JSX.Element;
export default Tag;
