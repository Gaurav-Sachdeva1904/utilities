import { default as React } from 'react';
export type ColorPickerProps = {
    value?: string;
    onColorSelect: (color: string) => void;
};
declare function ColorPicker({ value, onColorSelect }: ColorPickerProps): React.JSX.Element;
export default ColorPicker;
