import { ImageType } from '@/types/types';
import styles from './styles/ImageComponent.module.scss';
import Image from 'next/image';

interface ImageComponentProps {
    image: ImageType;
    contain?: boolean;
}

export default function ImageComponent(props: ImageComponentProps) {
    return (
        <div className={`${styles.wrapper}`}>
            <Image
                src={props.image.src}
                alt={props.image.alt}
                //width={1000}
                //height={1000}
                fill
                className={`${styles.image} ${props.contain ? styles.contain : ''}`}
            />
        </div> 
    )
}