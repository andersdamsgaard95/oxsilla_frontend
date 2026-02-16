import CaseBoxes from "@/Components/SectionComponents/CaseBoxes/CaseBoxes";
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
                heading2='Fruit salad yummi yummi'
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