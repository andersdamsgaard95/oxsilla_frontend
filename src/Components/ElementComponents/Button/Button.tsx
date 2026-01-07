import styles from './styles/Button.module.scss';
import Link from 'next/link';
import { ButtonType } from '@/types/types';
import CornerMarkers from '../CornerMarkers/CornerMarkers';

export default function Button(props: ButtonType) {

    return (
        <CornerMarkers
            isButton
            leftWidth={40}
            rightWidth={60}
        >
            <Link
                href={props.href}
                className={`${styles.button} ${props.color === 'black' ? styles.black : styles.white}`}
            >
                {props.text}
            </Link>
        </CornerMarkers>

    )
}