'use client';

import { portfolioProjectType } from '@/types/types';
import styles from './styles/CasePageComponent.module.scss';
import ImageComponent from '@/Components/ElementComponents/Image/ImageComponent';
import SectionWrapper from '@/Components/WrapperComponents/SectionWrapper/SectionWrapper';
import ContentWrapper from '@/Components/WrapperComponents/ContentWrapper/ContentWrapper';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface CasePageComponentProps {
    project: portfolioProjectType;
}

export default function CasePageComponent(props: CasePageComponentProps) {
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);
    const isPausedRef = useRef(false);

    const project = props.project;

    useEffect(() => {
        const el = imageWrapperRef.current;
        if (!el) return;

        let lastTime = 0;
        let direction = 1; // 1 = down, -1 = up
        let isWaiting = true;
        let waitTimeout: NodeJS.Timeout;

        const speed = 0.05; // adjust speed here

        function autoScroll(time: number) {
            if (!lastTime) lastTime = time;
            const delta = time - lastTime;
            lastTime = time;

            if (!isPausedRef.current && !isWaiting && el) {
                el.scrollTop += direction * speed * delta;

                // Reached bottom
                if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
                    direction = -1;
                    isWaiting = true;
                    setTimeout(() => (isWaiting = false), 1000); // pause at bottom
                }

                // Reached top
                if (el.scrollTop <= 0) {
                    direction = 1;
                    isWaiting = true;
                    setTimeout(() => (isWaiting = false), 1000); // pause at top
                }
            }

            animationRef.current = requestAnimationFrame(autoScroll);
        }

        // Initial 2 second delay before starting
        waitTimeout = setTimeout(() => {
            isWaiting = false;
        }, 500);

        animationRef.current = requestAnimationFrame(autoScroll);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            clearTimeout(waitTimeout);
        };
    }, []);



    return (
        <SectionWrapper>
            <ContentWrapper topPadding='none' fullWidth>
                <section
                    className={styles.wrapper}
                >
                    {/* Hero */}
                    {project.casePageSections.section1 && (
                        <div className={styles.caseHero}>
                            <div className={styles.text}>
                                <h1>{project.casePageSections.section1.heading}</h1>
                                <p>{project.shortDescription}</p>
                                <p>{project.casePageSections.section1.text}</p>
                            </div>

                            <div className={styles.relativeWrapper}>
                                <div
                                    ref={imageWrapperRef}
                                    className={styles.heroImageWrapper}
                                    onMouseEnter={() => (isPausedRef.current = true)}
                                    onMouseLeave={() => (isPausedRef.current = false)}
                                >
                                    <div className={styles.fullFrontPageWrapper}>
                                        <div className={styles.fullFrontPageWrapper}>
                                            <Image
                                                src={project.casePageSections.section1.image?.src ?? project.image.src}
                                                alt=''
                                                width={1423}
                                                height={4096}
                                            />
                                        </div>

                                        {/*<ImageComponent
                                    image={project.casePageSections.section1.image ?? project.image}
                                    borderRadius
                                />*/}
                                    </div>
                                </div>

                                <img className={styles.glow} src="/icons/Vector.png" alt="" />
                            </div>


                        </div>
                    )}


                    {/* Section 2 */}
                    {project.casePageSections.section2 && (
                        <div className={styles.section2}>
                            <div className={styles.text}>
                                <h2>{project.casePageSections.section2.heading}</h2>
                                <p>{project.casePageSections.section2.text}</p>
                            </div>
                        </div>
                    )}

                    {/* Section 3 */}
                    {project.casePageSections.section3 && (
                        <div className={styles.section3}>
                            <div className={styles.image2Container}>
                                <ImageComponent
                                    image={project.image}
                                    borderRadius
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>{project.casePageSections.section3.heading}</h2>
                                <p>{project.casePageSections.section3.text1}</p>
                                <ul>
                                    {project.casePageSections.section3.list?.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <p>{project.casePageSections.section3.text2}</p>
                            </div>
                        </div>
                    )}

                    {/* Section 4 */}
                    {project.casePageSections.section4 && (
                        <div className={styles.section4}>
                            <div className={styles.text}>
                                <h2>{project.casePageSections.section4.heading}</h2>
                                <p>{project.casePageSections.section4.text1}</p>
                                <ul>
                                    {project.casePageSections.section4.list?.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <p>{project.casePageSections.section4.text2}</p>
                            </div>
                            <div className={styles.image3Container}>
                                <ImageComponent
                                    image={project.image}
                                    borderRadius
                                />
                            </div>
                        </div>
                    )}

                    {/* Section 5 */}
                    {project.casePageSections.section5 && (
                        <div className={styles.section5}>
                            <div className={styles.text}>
                                <h2>{project.casePageSections.section5.heading}</h2>
                                <p>{project.casePageSections.section5.text1}</p>
                                <ul>
                                    {project.casePageSections.section5.list?.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <p>{project.casePageSections.section5.text2}</p>
                            </div>
                        </div>
                    )}

                </section>
            </ContentWrapper>
        </SectionWrapper>

    )
}