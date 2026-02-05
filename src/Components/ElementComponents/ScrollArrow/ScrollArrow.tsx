'use client';

import { useEffect, useState } from 'react';
import IconComponent from '../Icon/IconComponent';
import styles from './styles/ScrollArrow.module.scss';

interface ScrollArrowProps {
    idToScrollTo: string;
}

export default function ScrollArrow(props: ScrollArrowProps) {

    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        function scrollListen() {
            const scrollPosition = window.scrollY;

            setIsScrolled(scrollPosition > 100)
        }

        window.addEventListener('scroll', scrollListen, { passive: true });

        return () => {
            window.removeEventListener('scroll', scrollListen);
        }
    }, [])

    function handleScrollDown() {
        const scrollTarget = document.getElementById(props.idToScrollTo);

        if (!scrollTarget) return;

        scrollTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    return (
        <div
            className={`${styles.scrollArrowContainer} ${isScrolled ? styles.hidden : ''}`}
            onClick={() => handleScrollDown()}
        >
            <IconComponent
                image={{
                    src: '/icons/scroll_arrow.svg',
                    alt: ''
                }}
                width={100}
                height={100}
            />
        </div>
    )
}