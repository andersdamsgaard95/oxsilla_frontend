'use client';

import GlobalMenu from './GlobalMenu/GlobalMenu';
import styles from './styles/BurgerMenu.module.scss';
import { useEffect, useState } from 'react';

interface BurgerMenuProps {
    isScrolled: boolean;
}

export default function BurgerMenu(props: BurgerMenuProps) {
    const [menuIsShown, setMenuIsShown] = useState<boolean>(false);
    const isScrolled = props.isScrolled;

    useEffect(() => {

        function handleScroll() {
            setMenuIsShown(false);
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

    return (
        <>
            <button
                className={`${styles.burgerMenu} ${isScrolled && !menuIsShown ? styles.isScrolled : ''} ${menuIsShown ? styles.exit : ''}`}
                onClick={() => setMenuIsShown(!menuIsShown)}
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
                    setMenuIsShown={setMenuIsShown}
                />
            </div>

            {menuIsShown && (
                <div
                    className={styles.menuBackgroundLayer}
                    onClick={() => setMenuIsShown(false)}
                ></div>
            )}


        </>

    )
}