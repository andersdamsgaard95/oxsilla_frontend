import { portfolioProjectType } from '@/types/types';
import ImageComponent from '../Image/ImageComponent';
import styles from './styles/ProjectSlide.module.scss';
import Link from 'next/link';
import { getSkillColorCode } from '@/helperFunctions/getSkillColorCode';
import CTA from '../CTA/CTA';

interface ProjectSlideProps {
    slide: portfolioProjectType;
}

export default function ProjectSlide(props: ProjectSlideProps) {

    return (
        <Link
            href={`/cases/${props.slide.descriptionURL}`}
            className={styles.link}
        >
            <div className={styles.slide}>
                <div className={styles.imageWrapper}>
                    <ImageComponent
                        image={props.slide.image}
                    />
                </div>
                <div className={styles.slideText}>
                    <h2>{props.slide.title}</h2>
                    <p>{props.slide.shortDescription}</p>

                    <div className={styles.lastRow}>
                        {props.slide.descriptionURL && (
                            <div className={styles.linkContainer}>
                                <div
                                    className={styles.arrowLink}
                                >
                                    <CTA
                                        text='See case'
                                        destination={props.slide.descriptionURL}
                                        isNestedLink
                                    />
                                </div>
                            </div>
                        )}

                        <ul className={styles.skillsUsed}>
                            {props.slide.skillsUsed.map((skill, i) => (
                                <li
                                    key={i}
                                    className={styles.skillBox}
                                    style={getSkillColorCode(skill)}
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

            </div>
        </Link>
    )

}