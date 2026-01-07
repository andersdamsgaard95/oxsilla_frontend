import { portfolioProjectType } from '@/types/types';
import ImageComponent from '../Image/ImageComponent';
import styles from './styles/ProjectSlide.module.scss';
import Link from 'next/link';
import { getSkillColorCode } from '@/helperFunctions/getSkillColorCode';

interface ProjectSlideProps {
    slide: portfolioProjectType;
}

export default function ProjectSlide(props: ProjectSlideProps) {

    return (
        <Link
            href={props.slide.descriptionURL}
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

                        {props.slide.descriptionURL && (
                            <div className={styles.linkContainer}>
                                <div
                                    className={styles.arrowLink}
                                >
                                    Se projekt
                                    <p>--{'>'}</p>
                                </div>
                            </div>
                        )}


                    </div>
                </div>

            </div>
        </Link>
    )

}