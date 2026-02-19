'use client';

import { useEffect, useState } from 'react';
import styles from './styles/PageLoader.module.scss';
import IconComponent from '../Icon/IconComponent';

export default function PageLoader() {
    const [isShown, setIsShown] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(false);
        }, 3000)

        return () => clearTimeout(timer);
    }, [])

    if (!isShown) return null;

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <IconComponent
                    image={{
                        src: "/icons/x_logo1.svg",
                        alt: ''
                    }}
                    width={1}
                    height={1}
                />
            </div>
        </div>
    )
}