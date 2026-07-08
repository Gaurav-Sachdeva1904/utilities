import { Size } from '../../interface/index';
import * as React from 'react';
export interface LoadingSpinnerProps {
    size?: Size;
    className?: string;
}
export default function LoadingSpinner({ size, className }: LoadingSpinnerProps): React.JSX.Element;
