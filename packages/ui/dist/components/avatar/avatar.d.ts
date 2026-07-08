import { Size } from '../../interface/index';
type Props = {
    src?: string;
    alt?: string;
    fallback: {
        color?: string;
        bgColor?: string;
        text?: string;
    };
    size?: Size;
};
declare const Avatar: ({ src, alt, fallback: { color, bgColor, text }, size }: Props) => import("react").JSX.Element;
export default Avatar;
