'use client';

import Link from 'next/link';
import IconComponent from '../ElementComponents/Icon/IconComponent';
import styles from './styles/Header.module.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);
    const lastScrollPosition = useRef(0);
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    useEffect(() => {
        let ticking = false;

        function handleScroll() {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 200);
                    if (window.scrollY > lastScrollPosition.current) {
                        setIsScrollingDown(true);
                    } else {
                        setIsScrollingDown(false);
                    }
                    lastScrollPosition.current = window.scrollY;
                    ticking = false;
                })
                ticking = true;
            }
        }

        window.addEventListener('scroll', handleScroll);

        setIsScrolled(window.scrollY > 200);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`${styles.wrapper} ${isScrolled ? styles.headerScrolled : ''} ${isScrolled && isScrollingDown ? styles.hiddenHeader : ''} ${!menuIsOpen && isScrolled ? styles.invert : ''}`}
        >
            {/*<Link
                className={`${styles.logoWrapper} ${isScrolled ? styles.hiddenLogo : ''}`}
                href='/'
                aria-hidden={isScrolled}
            >
                <IconComponent
                    image={{
                        src: '/icons/logo_header.png',
                        alt: ''
                    }}
                    width={229}
                    height={42.7}
                />
            </Link>*/}

            {/* Small logo */}
            <Link
                className={`${styles.smallLogoWrapper} ${isScrolled ? styles.isScrolled : ''}`}
                href='/'
            //aria-hidden={!isScrolled}
            >
                <IconComponent
                    image={{
                        src: '/icons/logo_small_vector.svg',
                        alt: ''
                    }}
                    width={1}
                    height={1}
                />
            </Link>

            <BurgerMenu
                isScrolled={isScrolled}
                setIsOpen={setMenuIsOpen}
            />
        </header>
    )
}