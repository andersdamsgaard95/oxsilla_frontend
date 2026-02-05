'use client';

import SectionWrapper from '@/Components/WrapperComponents/SectionWrapper/SectionWrapper';
import styles from './styles/Slider.module.scss';
import { useWindowSize } from 'react-use';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ProjectSlide from '@/Components/ElementComponents/ProjectSlide/ProjectSlide';
import { ImageType, backgroundOpacityLayerType, portfolioProjectType } from '@/types/types';
import IconComponent from '@/Components/ElementComponents/Icon/IconComponent';

interface SliderProps {
    slides?: portfolioProjectType[];
    heading?: string;
    backgroundImage?: ImageType;
    backgroundOpacityLayer?: backgroundOpacityLayerType;
}

export default function Slider(props: SliderProps) {
    const { width } = useWindowSize();
    const sliderRef = useRef<HTMLDivElement>(null);
    const [prevIsDisabled, setPrevIsDisabled] = useState<boolean>(false);
    const [nextIsDisabled, setNextIsDisabled] = useState<boolean>(false);

    function updateButtonStates() {
        const slider = sliderRef.current;
        if (!slider) return;

        const scrollLeft = slider.scrollLeft;
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

        setPrevIsDisabled(scrollLeft <= 0);
        setNextIsDisabled(scrollLeft >= maxScrollLeft - 1); // -1 for edge precision
    }

    function nextSlide() {

        const gap = width <= 700 ? 10 : width <= 1000 ? 25 : 50;

        const slider = sliderRef.current;

        if (slider && slider.firstChild instanceof HTMLElement) {
            const slideWidth = slider.firstChild.offsetWidth;
            slider.scrollBy({
                left: slideWidth + gap,
                behavior: 'smooth',
            });
        }
    }

    function prevSlide() {

        const gap = width <= 700 ? 10 : width <= 1000 ? 25 : 50;

        const slider = sliderRef.current;

        if (slider && slider.firstChild instanceof HTMLElement) {
            const slideWidth = slider.firstChild.offsetWidth;
            slider.scrollBy({
                left: -(slideWidth + gap),
                behavior: 'smooth',
            });
        }
    }

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleScroll = () => updateButtonStates();

        slider.addEventListener('scroll', handleScroll);
        updateButtonStates(); // initial check

        return () => {
            slider.removeEventListener('scroll', handleScroll);
        };
    }, [width, props.slides]); // re-check on resize or new slides

    return (
        <SectionWrapper
            backgroundImage={props.backgroundImage}
            topPadding='large' bottomPadding='large'
            backgroundOpacityLayer={props.backgroundOpacityLayer}
        >
            <div className={styles.wrapper}>

                <h2 className={styles.heading}>{props.heading}</h2>

                <div className={styles.sliderTrack} ref={sliderRef}>
                    {props.slides && props.slides.length > 0 && props.slides.map((slide: any, i: number) => (
                        <div key={i} className={styles.slideContainer}>
                            <ProjectSlide
                                slide={slide}
                            />
                        </div>
                    ))}
                </div>

                {/* Arrow buttons */}
                {width >= 600 && (!prevIsDisabled || !nextIsDisabled) && (
                    <>
                        <button
                            aria-label='Slide to previous slide'
                            className={`${styles.arrowBack}`}
                            onClick={prevSlide}
                            disabled={prevIsDisabled}
                        >
                            <div className={styles.arrow}>
                                <IconComponent
                                    image={{
                                        src: '/icons/scroll_arrow.svg',
                                        alt: 'Slide to previous slide'
                                    }}
                                    width={1}
                                    height={1}
                                />
                            </div>

                        </button>

                        <button
                            aria-label='Slide to next slide'
                            className={`${styles.arrowNext}`}
                            onClick={nextSlide}
                            disabled={nextIsDisabled}
                        >
                            <div className={styles.arrow}>
                                <IconComponent
                                    image={{
                                        src: '/icons/scroll_arrow.svg',
                                        alt: 'Slide to next slide'
                                    }}
                                    width={1}
                                    height={1}
                                />
                            </div>
                        </button>
                    </>
                )}

            </div>
        </SectionWrapper>
    )
}