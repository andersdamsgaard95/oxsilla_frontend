import Link from 'next/link';
import IconComponent from '../ElementComponents/Icon/IconComponent';
import styles from './styles/Footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.footerInfo}>
                <a className={styles.email} href="mailto:oxsilla.media@gmail.com">oxsilla.media@gmail.com</a>
                <p>CVR: 12345678</p>
            </div>
            <Link href={'/'} className={styles.iconWrapper}>
                <IconComponent
                    image={{
                        src: '/icons/x_logo1.svg',
                        alt: ''
                    }}
                    width={1}
                    height={1}
                />
            </Link>
        </div>
    )
}