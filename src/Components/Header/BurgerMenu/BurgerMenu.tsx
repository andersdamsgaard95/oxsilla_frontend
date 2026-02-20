'use client';

import GlobalMenu from './GlobalMenu/GlobalMenu';
import styles from './styles/BurgerMenu.module.scss';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface BurgerMenuProps {
    isScrolled: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu(props: BurgerMenuProps) {
    const [menuIsShown, setMenuIsShown] = useState<boolean>(false);
    const isScrolled = props.isScrolled;

    useEffect(() => {

        function handleScroll() {
            setMenuIsShown(false);
            props.setIsOpen(false);
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);

    // Disable scroll on mobile when menu is open
    useEffect(() => {
        if (window.innerWidth <= 600) {
            document.body.style.overflow = menuIsShown ? 'hidden' : '';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuIsShown]);

    function closeMenu() {
        setMenuIsShown(false);
        props.setIsOpen(false);
    }

    return (
        <>
            <button
                className={`${styles.burgerMenu} ${isScrolled && !menuIsShown ? styles.isScrolled : ''} ${menuIsShown ? styles.exit : ''}`}
                onClick={() => {
                    setMenuIsShown(!menuIsShown)
                    props.setIsOpen(!menuIsShown);
                }}
            >
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
            </button>

            <div
                className={`${styles.navContainer} ${!menuIsShown ? styles.hidden : ''}`}
                aria-hidden={!menuIsShown}
            >
                <GlobalMenu
                    closeMenu={closeMenu}
                />
            </div>

            {menuIsShown && (
                <div
                    className={styles.menuBackgroundLayer}
                    onClick={() => {
                        setMenuIsShown(false);
                        props.setIsOpen(false);
                    }}
                ></div>
            )}


        </>

    )
}