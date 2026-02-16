'use client';

import { useEffect, useState } from 'react';
import styles from './styles/PopUp.module.scss';

interface PopUpProps {

}

export default function PopUp(props: PopUpProps) {
    const [popUpIsShown, setPopUpIsShown] = useState<boolean>(false);

    useEffect(() => {
        console.log("Popup mounted");
        const hasSeenPopUp = sessionStorage.getItem("hasSeenPopUp");

        if (!hasSeenPopUp) {
            const timer = setTimeout(() => {
                setPopUpIsShown(true);
                sessionStorage.setItem('hasSeenPopUp', "true");
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [])

    return (
        <section className={`${styles.popUp} ${!popUpIsShown ? styles.hidden : ''}`}>
            <button
                className={styles.closePopUp}
                onClick={() => setPopUpIsShown(false)}
            >
                X
            </button>
            <h2>Contact us</h2>
        </section>
    )

}