import styles from './styles/SectionWrapper.module.scss';
import { ImageType, backgroundOpacityLayerType } from '@/types/types';
import ImageComponent from '@/Components/ElementComponents/Image/ImageComponent';

interface SectionWrapperProps {
    children: React.ReactNode;
    backgroundColor?: string;
    backgroundImage?: ImageType;
    backgroundOpacityLayer?: backgroundOpacityLayerType;
    topPadding?: 'normal' | 'large' | 'small' | 'none';
    bottomPadding?: 'normal' | 'large' | 'small' | 'none';
}

export default function SectionWrapper(props: SectionWrapperProps) {
    const topPaddingClass = props.topPadding === 'small' ? styles.smallTopPadding : props.topPadding === 'large' ? styles.largeTopPadding : props.topPadding === 'none' ? styles.noTopPadding : styles.normalTopPadding;
    const bottomPaddingClass = props.bottomPadding === 'small' ? styles.smallbottomPadding : props.bottomPadding === 'large' ? styles.largeBottomPadding : props.bottomPadding === 'none' ? styles.noBottomPadding : styles.normalBottomPadding;

    return (
        <div
            className={`${styles.wrapper} ${topPaddingClass} ${bottomPaddingClass}`}
            style={{
                backgroundColor: props.backgroundColor
            }}
        >
            {props.backgroundImage && (
                <div className={styles.backgroundImage}>
                    <ImageComponent
                        image={props.backgroundImage}
                    />
                </div>
            )}

            {props.backgroundOpacityLayer && (
                <div className={`${styles.backgroundOpacityLayer} ${props.backgroundOpacityLayer.direction === 'to left' ? styles.toLeft : props.backgroundOpacityLayer.direction === 'to bottom' ? styles.toBottom : props.backgroundOpacityLayer.direction === 'to top' ? styles.toTop : styles.toRight}`}></div>
            )}



            {props.children}
        </div>
    )
}