import { ImageType, competencyType } from '@/types/types';
import styles from './styles/CompotencyBox.module.scss';

interface CompetencyBoxProps {
    competency: competencyType;
    backgroundImage: ImageType;
}

export default function CompetencyBox(props: CompetencyBoxProps) {

    const competency = props.competency;

    return (
        <div className={styles.wrapper}>
            <h3>{competency.title}</h3>
            <div
                className={styles.transparentBox}
                style={{
                    ['--bg-image' as any]: `url(${props.backgroundImage.src})`,
                }}
            >
                <p className={styles.text}>
                    {competency.description.split('\n').map((line, i) => (
                        <span className={i !== 0 ? styles.line : ''} key={i}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>

                <div className={styles.darkLayer}></div>
            </div>
        </div>
    )
}