import styles from './styles/ContentWrapper.module.scss';

interface ContentWrapperProps {
    children: React.ReactNode;
    fullWidth?: boolean;
    topPadding?: 'normal' | 'large' | 'small' | 'none';
    bottomPadding?: 'normal' | 'large' | 'small' | 'none';
}

export default function ContentWrapper(props: ContentWrapperProps) {

    const topPaddingClass = props.topPadding === 'small' ? styles.smallTopPadding : props.topPadding === 'large' ? styles.largeTopPadding : props.topPadding === 'none' ? styles.noTopPadding : styles.normalTopPadding;
    const bottomPaddingClass = props.bottomPadding === 'small' ? styles.smallbottomPadding : props.bottomPadding === 'large' ? styles.largeBottomPadding : props.bottomPadding === 'none' ? styles.noBottomPadding : styles.normalBottomPadding;

    return (
        <div className={`${styles.wrapper} ${topPaddingClass} ${bottomPaddingClass} ${!props.fullWidth ? styles.padding : ''}`}>
            {props.children}
        </div>
    )
}