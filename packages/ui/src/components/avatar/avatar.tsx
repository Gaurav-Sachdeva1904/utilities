import { Root, Fallback, Image } from '@radix-ui/react-avatar';
import { Size } from '@interface/index';

import '@components/avatar/avatar.scss';
import classNames from 'classnames';

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

const Avatar = ({ src, alt, fallback: { color, bgColor, text } = {}, size = 'M' }: Props) => (
    <>
        <Root
            className={classNames('avatar', { [`avatar-size--${size}`]: size })}
            style={{ color, backgroundColor: bgColor }}>
            <Image className="avatar-image" src={src} alt={alt} />
            <Fallback className="avatar-fallback">{text}</Fallback>
        </Root>
    </>
);

export default Avatar;
