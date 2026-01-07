'use client';

import IconComponent from '../Icon/IconComponent';
import styles from './styles/ScrollArrow.module.scss';

export default function ScrollArrow() {

    function handleScrollDown() {
        window.scrollBy({
            top: window.innerHeight, // scroll 100vh ned
            behavior: 'smooth', // smooth scroll
        });
    }

    return (
        <div
            className={styles.scrollArrowContainer}
            onClick={() => handleScrollDown()}
        >
            <IconComponent
                image={{
                    src: '/icons/scroll_arrow.png',
                    alt: ''
                }}
                width={100}
                height={100}
            />
        </div>
    )
}