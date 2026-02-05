import SectionWrapper from '@/Components/WrapperComponents/SectionWrapper/SectionWrapper';
import styles from './styles/CompetenciesBoxes.module.scss';
import ContentWrapper from '@/Components/WrapperComponents/ContentWrapper/ContentWrapper';
import competenciesBoxes from '../../../JSON/competencies/competencies.json';
import CompetencyBox from '@/Components/ElementComponents/CompetenciesBox/CompetencyBox';
import ImageComponent from '@/Components/ElementComponents/Image/ImageComponent';
import { ImageType } from '@/types/types';

interface CompetenciesBoxProps {
    backgroundImage: ImageType;
}

export default function CompetenciesBoxes(props: CompetenciesBoxProps) {
    return (
        <SectionWrapper>
            <ContentWrapper>
                <section
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
                </section>
            </ContentWrapper>
        </SectionWrapper>
    );
}