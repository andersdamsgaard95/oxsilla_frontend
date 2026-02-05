import CaseBoxes from "@/Components/SectionComponents/CompetenciesBoxes/CaseBoxes/CaseBoxes";
import Hero from "@/Components/SectionComponents/Hero/Hero";
import projects from '../../JSON/portfolioProjects/portfolioProjects.json';

export default function cases() {
    return (
        <>
            <Hero
                backgroundImage={{
                    src: '/images/cases-hero.png',
                    alt: ''
                }}
                heading={
                    <>
                        Cases
                    </>
                }
                textPosition="center"
                addCornerMarker
                backgroundOpacityLayer={{
                    direction: 'to bottom'
                }}
            />

            <CaseBoxes
                cases={projects}
            />
        </>
    )
}