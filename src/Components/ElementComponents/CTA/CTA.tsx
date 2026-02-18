import styles from './styles/CTA.module.scss';
import Link from 'next/link';
import { getThemeColor } from '@/helperFunctions/getThemeColor';
import IconComponent from '../Icon/IconComponent';

interface CTAProps {
    destination: string;
    text: string;
    color?: string;
    isNestedLink?: boolean;
}

export default function CTA(props: CTAProps) {
    return props.isNestedLink ? (
        <div
            className={styles.link}
            style={{ color: props.color ? getThemeColor(props.color) : '' }}
        >
            {props.text}
            <span className={styles.arrow}>
                <IconComponent
                    image={{
                        src: '/icons/arrow_new.svg',
                        alt: ''
                    }}
                    width={1}
                    height={1}
                />
            </span>
        </div>
    ) : (
        <Link
            href={props.destination}
            className={styles.link}
            style={{ color: props.color ? getThemeColor(props.color) : '' }}
        >
            {props.text}
            <span className={styles.arrow}>
                →
            </span>
        </Link>
    );
}