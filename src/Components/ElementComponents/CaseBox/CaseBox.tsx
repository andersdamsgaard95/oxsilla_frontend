import { portfolioProjectType } from '@/types/types';
import styles from './styles/CaseBox.module.scss';
import ImageComponent from '../Image/ImageComponent';
import Link from 'next/link';
import { getSkillColorCode } from '@/helperFunctions/getSkillColorCode';
import CTA from '../CTA/CTA';

interface CaseBoxProps {
    project: portfolioProjectType;
}

export default function CaseBox(props: CaseBoxProps) {

    const project = props.project;

    return (
        <Link href={project.descriptionURL} className={styles.wrapper}>
            <div className={styles.textWrapper}>
                <h2>{project.title}</h2>
                <p>{project.shortDescription}</p>
                {<CTA
                    destination={props.project.descriptionURL}
                    text='see more'
                    color='red2'
                    isNestedLink
                />}
                <ul className={styles.skillsUsed}>
                    {project.skillsUsed.map((skill, i) => (
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

            <div className={styles.imageWrapper}>
                <ImageComponent
                    image={project.image}
                />
            </div>

            <div className={styles.backgroundImage}>
                <ImageComponent
                    image={project.image}
                />
            </div>
        </Link>
    )
}