'use client';

import { useEffect, useState } from 'react';
import styles from './styles/PopUp.module.scss';
import Button from '../Button/Button';
import { ButtonType } from '@/types/types';

interface PopUpProps {
    heading: string;
    text?: string;
    button?: ButtonType;
}

export default function PopUp(props: PopUpProps) {
    const [popUpIsShown, setPopUpIsShown] = useState<boolean>(false);

    useEffect(() => {
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
            <h2>{props.heading}</h2>
            {props.text && <p>{props.text}</p>}
            {props.button && (
                <div onClick={() => setPopUpIsShown(false)}>
                    <Button
                        text={props.button.text}
                        href={props.button.href}
                    />
                </div>
            )}


        </section>
    )

}