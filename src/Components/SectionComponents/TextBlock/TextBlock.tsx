import { ButtonType, ImageType, backgroundOpacityLayerType } from '@/types/types';
import styles from './styles/TextBlock.module.scss';
import SectionWrapper from '@/Components/WrapperComponents/SectionWrapper/SectionWrapper';
import ContentWrapper from '@/Components/WrapperComponents/ContentWrapper/ContentWrapper';
import CornerMarkers from '@/Components/ElementComponents/CornerMarkers/CornerMarkers';
import Button from '@/Components/ElementComponents/Button/Button';

interface TextBlockProps {
    heading?: React.ReactNode;
    text?: string;
    backgroundColor?: string;
    BackgroundImage?: ImageType;
    cornerMarkers?: boolean;
    button?: ButtonType;
    textPosition?: "left" | "center" | "right";
    buttonPosition?: "left" | "center" | "right";
    backgroundOpacityLayer?: backgroundOpacityLayerType;
    minimumHeightInPx?: number;
}

export default function TextBlock(props: TextBlockProps) {

    const textPositionClass = props.textPosition === 'center' ? styles.textCenter : props.textPosition === 'right' ? styles.textRight : '';
    const buttonPositionClass = props.buttonPosition === 'center' ? styles.buttonCenter : props.buttonPosition === 'right' ? styles.buttonRight : '';
    return (
        <SectionWrapper
            topPadding='large'
            bottomPadding='large'
            backgroundImage={props.BackgroundImage}
            backgroundOpacityLayer={props.backgroundOpacityLayer}
        >
            <ContentWrapper>
                <section
                    id='text-block-section'
                    className={styles.wrapper}
                    style={{
                        minHeight: props.minimumHeightInPx ? `${props.minimumHeightInPx / 10}rem` : ''
                    }}
                >
                    <div className={`${styles.contentContainer} ${textPositionClass}`}>
                        {props.cornerMarkers ? (
                            <CornerMarkers
                                leftWidth={80}
                                rightWidth={70}
                                animateOnScroll={{
                                    sectionElementId: 'text-block-section',
                                    growOrShrink: 'shrink',
                                    triggerFromTop: false
                                }}
                                textBlock
                            >
                                <div className={styles.textContainer}>
                                    {props.heading && (
                                        <h2 className={styles.heading}>{props.heading}</h2>
                                    )}

                                    {props.text && (
                                        <p className={styles.text}>{props.text}</p>
                                    )}
                                </div>

                            </CornerMarkers>

                        ) : (
                            <div className={styles.textContainer}>
                                {props.heading && (
                                    <h2 className={styles.heading}>{props.heading}</h2>
                                )}

                                {props.text && (
                                    <p className={styles.text}>{props.text}</p>
                                )}
                            </div>

                        )}
                    </div>

                    {props.button && (
                        <div className={`${styles.buttonWrapper} ${buttonPositionClass}`}>
                            <Button
                                text={props.button.text}
                                href={props.button.href}
                                color='white'
                            />
                        </div>

                    )}

                </section>
            </ContentWrapper>
        </SectionWrapper>
    )
}