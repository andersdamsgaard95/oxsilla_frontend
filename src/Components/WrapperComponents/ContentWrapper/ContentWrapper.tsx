import styles from './styles/ContentWrapper.module.scss';

interface ContentWrapperProps {
    children: React.ReactNode;
    fullWidth?: boolean;
}

export default function ContentWrapper(props: ContentWrapperProps) {
    return (
        <div className={`${styles.wrapper} ${!props.fullWidth ? styles.padding : ''}`}>
            {props.children}
        </div>
    )
}