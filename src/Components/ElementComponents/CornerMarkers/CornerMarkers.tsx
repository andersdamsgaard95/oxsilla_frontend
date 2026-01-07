'use client';

import styles from './styles/CornerMarkers.module.scss';
import { useEffect, useState } from 'react';

interface CornerMarkersProps {
    leftWidth: number;
    rightWidth: number;
    children: React.ReactNode;
    isButton?: boolean;
    animateOnScroll?: {
        sectionElementId: string;
        triggerFromTop: boolean;
        growOrShrink: 'grow' | 'shrink';
    }
    textBlock?: boolean;
}

export default function CornerMarkers(props: CornerMarkersProps) {
    const [leftWidth, setLeftWidth] = useState(props.leftWidth);
    const [rightWidth, setRightWidth] = useState(props.rightWidth);

    useEffect(() => {
        if (!props.animateOnScroll) return;

        const sectionElement = document.getElementById(props.animateOnScroll.sectionElementId);
        if (!sectionElement) return;

        const sectionHeight = sectionElement.offsetHeight;

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const rect = sectionElement.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;

                    let scrollFraction: number;
                    if (props.animateOnScroll?.triggerFromTop) {
                        // Hero: 0 = top rammer viewport top, 1 = scrollet væk (baseret på viewport)
                        scrollFraction = Math.min(Math.max(-rect.top / viewportHeight, 0), 1);
                    } else {
                        // Andre sektioner: 0 = ikke synlig, 1 = helt i toppen (og forbi)
                        scrollFraction = Math.min(Math.max((viewportHeight - rect.top) / (viewportHeight + sectionHeight), 0), 1);
                    }

                    // clamp bredden så den ikke overstiger 100% eller går under 0%
                    const delta = scrollFraction * 50;
                    const newLeft = props.animateOnScroll?.growOrShrink === 'grow'
                        ? Math.min(props.leftWidth + delta, 100)
                        : Math.max(props.leftWidth - delta, 10);

                    const newRight = props.animateOnScroll?.growOrShrink === 'grow'
                        ? Math.min(props.rightWidth + delta, 100)
                        : Math.max(props.rightWidth - delta, 10);

                    setLeftWidth(newLeft);
                    setRightWidth(newRight);

                    ticking = false;
                });
                ticking = true;
            }
        };


        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        window.addEventListener('scroll', handleScroll);
                        handleScroll(); // opdater straks
                    } else {
                        window.removeEventListener('scroll', handleScroll);
                    }
                });
            },
            {
                threshold: 0,
                // rootMargin: flytter trigger op eller ned i viewport
                rootMargin: props.animateOnScroll?.triggerFromTop
                    ? '0px'               // Hero: top trigger
                    : '0px 0px 0% 0px',
            }
        );

        observer.observe(sectionElement);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [props.animateOnScroll, props.leftWidth, props.rightWidth]);


    return (
        <div className={`${styles.wrapper} ${props.isButton ? styles.isButton : props.textBlock ? styles.textBlock : ''}`}>

            {props.children}

            <div
                className={styles.leftCorner}
                style={{
                    width: `${leftWidth}%`
                }}
            ></div>
            <div
                className={styles.rightCorner}
                style={{
                    width: `${rightWidth}%`
                }}
            ></div>
        </div>
    )

} 