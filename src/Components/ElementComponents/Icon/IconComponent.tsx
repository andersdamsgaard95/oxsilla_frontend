import styles from './styles/IconComponent.module.scss';
import { ImageType } from '@/types/types';
import Image from 'next/image';

interface IconComponentProps {
    image: ImageType;
    width: number;
    height: number;
}

export default function IconComponent(props: IconComponentProps) {
    return (
        <div
            className={`${styles.wrapper}`}
            style={{
                aspectRatio: `${props.width} / ${props.height}`
            }}
        >
            <Image
                src={props.image.src}
                alt={props.image.alt}
                className={`${styles.image}`}
                fill
            />
        </div>
    )
}