import { portfolioProjectType } from '@/types/types';
import styles from './styles/CasePageComponent.module.scss';
import ImageComponent from '@/Components/ElementComponents/Image/ImageComponent';
import SectionWrapper from '@/Components/WrapperComponents/SectionWrapper/SectionWrapper';
import ContentWrapper from '@/Components/WrapperComponents/ContentWrapper/ContentWrapper';
import IconComponent from '@/Components/ElementComponents/Icon/IconComponent';

interface CasePageComponentProps {
    project: portfolioProjectType;
}

export default function CasePageComponent(props: CasePageComponentProps) {

    const project = props.project;

    return (
        <SectionWrapper>
            <ContentWrapper topPadding='none' fullWidth>
                <section
                    className={styles.wrapper}
                >
                    {/* Hero */}
                    <div className={styles.caseHero}>
                        <div className={styles.text}>
                            <h1>{project.title}</h1>
                            <p>{project.shortDescription}</p>
                        </div>
                        <div className={styles.heroImageWrapper}>
                            <ImageComponent
                                image={project.image}
                                borderRadius
                            />

                            <img className={styles.glow} src="/icons/Vector.png" alt="" />
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className={styles.section2}>
                        <div className={styles.text}>
                            <h2>{project.casePageSections.section2.heading}</h2>
                            <p>{project.casePageSections.section2.text}</p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className={styles.section3}>
                        <div className={styles.image2Container}>
                            <ImageComponent
                                image={project.image}
                                borderRadius
                            />
                        </div>
                        <div className={styles.text}>
                            <h2>{project.casePageSections.section3.heading}</h2>
                            <p>{project.casePageSections.section3.text}</p>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className={styles.section4}>
                        <div className={styles.text}>
                            <h2>{project.casePageSections.section4.heading}</h2>
                            <p>{project.casePageSections.section4.text}</p>
                        </div>
                        <div className={styles.image3Container}>
                            <ImageComponent
                                image={project.image}
                                borderRadius
                            />
                        </div>
                    </div>

                </section>
            </ContentWrapper>
        </SectionWrapper>

    )
}