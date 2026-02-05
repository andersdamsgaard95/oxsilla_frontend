import { ImageType, competencyType } from '@/types/types';
import styles from './styles/CompotencyBox.module.scss';

interface CompetencyBoxProps {
    competency: competencyType;
    backgroundImage: ImageType;
}

export default function CompetencyBox(props: CompetencyBoxProps) {

    const competency = props.competency;

    const style: React.CSSProperties & { ['--bg-image']: string } = {
        '--bg-image': `url(${props.backgroundImage.src})`,
    };

    return (
        <div className={styles.wrapper}>
            <h3>{competency.title}</h3>
            <div
                className={styles.transparentBox}
                style={style}
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