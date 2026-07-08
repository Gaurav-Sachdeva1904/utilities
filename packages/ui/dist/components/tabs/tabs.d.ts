import { default as React } from 'react';
import { Size } from '../../interface/index';
export type TabItem = {
    key: string;
    value: string;
    disabled?: boolean;
};
export type TabsProps = {
    tabs: TabItem[];
    value?: string;
    defaultValue?: string;
    size?: Size;
    className?: string;
    onSelect?: (value: string) => void;
};
declare function Tabs(props: TabsProps): React.JSX.Element;
export default Tabs;
