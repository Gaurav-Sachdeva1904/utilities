import { SizeMap } from '@constants/size';
import { Size } from '@interface/index';

const SIZE_ORDER = Object.keys(SizeMap) as Size[];

export function getSmallerSize(size: Size): Size {
    const index = SIZE_ORDER.indexOf(size);
    return index > 0 ? SIZE_ORDER[index - 1] : size;
}
