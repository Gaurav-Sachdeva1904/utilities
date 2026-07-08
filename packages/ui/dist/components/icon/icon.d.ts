import { IconName } from './icons';
import { Size } from '../../interface/index';
import * as React from 'react';
export type IconProps = {
    name: IconName;
    size?: Size | number;
    color?: string;
    className?: string;
    strokeWidth?: number;
};
declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
export default Icon;
