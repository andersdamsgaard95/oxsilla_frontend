import SectionWrapper from '@/Components/WrapperComponents/SectionWrapper/SectionWrapper';
import styles from './styles/CompetenciesBoxes.module.scss';
import ContentWrapper from '@/Components/WrapperComponents/ContentWrapper/ContentWrapper';
import competenciesBoxes from '../../../JSON/competencies/competencies.json';
import CompetencyBox from '@/Components/ElementComponents/CompetenciesBox/CompetencyBox';
import { ButtonType, ImageType } from '@/types/types';
import Button from '@/Components/ElementComponents/Button/Button';

interface CompetenciesBoxProps {
    backgroundImage: ImageType;
    button?: ButtonType;
    buttonPosition?: 'left' | 'center' | 'right';
}

export default function CompetenciesBoxes(props: CompetenciesBoxProps) {

    const btnPositionClass = props.buttonPosition === 'center' ? styles.centerBtn : props.buttonPosition === 'right' ? styles.rightBtn : '';

    return (
        <SectionWrapper>
            <ContentWrapper>
                <section className={styles.wrapper}>
                    <div
                        className={styles.boxGrid}
                    >
                        {competenciesBoxes.map((box, i) => {
                            return (
                                <div className={styles.boxWrapper} key={i}>
                                    <CompetencyBox
                                        competency={box}
                                        backgroundImage={props.backgroundImage}
                                    />
                                </div>
                            )
                        })}
                    </div>

                    {props.button && (
                        <div className={btnPositionClass}>
                            <Button
                                text={props.button.text}
                                href={props.button.href}
                            />
                        </div>

                    )}
                </section>

            </ContentWrapper>
        </SectionWrapper>
    );
}