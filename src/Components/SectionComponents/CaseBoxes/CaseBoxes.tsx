import { portfolioProjectType } from '@/types/types';
import styles from './styles/CaseBoxes.module.scss';
import SectionWrapper from '@/Components/WrapperComponents/SectionWrapper/SectionWrapper';
import ContentWrapper from '@/Components/WrapperComponents/ContentWrapper/ContentWrapper';
import CaseBox from '@/Components/ElementComponents/CaseBox/CaseBox';

interface CaseBoxesProps {
    cases: portfolioProjectType[];
}

export default function CaseBoxes(props: CaseBoxesProps) {
    return (
        <SectionWrapper>
            <ContentWrapper>
                <div id='caseBoxes' className={styles.wrapper}>
                    {props.cases.map((project, i) => {
                        return (
                            <div key={i}>
                                <CaseBox
                                    project={project}
                                />
                            </div>
                        )
                    })}
                </div>
            </ContentWrapper>
        </SectionWrapper>
    )
}