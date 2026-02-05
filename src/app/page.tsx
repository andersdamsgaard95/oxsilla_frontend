import Hero from "@/Components/SectionComponents/Hero/Hero";
import MasonryGrid from "@/Components/SectionComponents/MasonryGrid/MasonryGrid";
import Slider from "@/Components/SectionComponents/Slider/Slider";
import TextBlock from "@/Components/SectionComponents/TextBlock/TextBlock";

import projects from '@/JSON/portfolioProjects/portfolioProjects.json';
import frontPageProjectsGrid from '@/JSON/frontPageProjectsGrid/frontPageProjectsGrid.json'

export default function Home() {
  return (
    <>
      <Hero
        backgroundImage={{
          src: '/images/hero2.png',
          alt: 'hero billede'
        }}
        heading={
          <>
            Specialister i webudvikling<br />og medieproduktioner
          </>
        }
        textPosition="center"
        addCornerMarker
        backgroundColor="black"
        addAnimatedLogo
        button={{
          text: 'kontakt',
          href: '/kontakt'
        }}
        backgroundOpacityLayer={{
          direction: 'to bottom'
        }}
      />

      <TextBlock
        heading={
          <>
            <span>
              Oxsilla udvikler unikke, digitale løsninger.
            </span>
            <span>
              Vi brænder for storytelling og branding gennem professionel videoproduktion, fotografi og webudvikling.
            </span>
          </>
        }
        BackgroundImage={{
          src: '/images/alexander.png',
          alt: 'alexander'
        }}
        cornerMarkers
        button={{
          text: 'kompetencer',
          href: '/kompetencer'
        }}
        textPosition="left"
        buttonPosition="center"
        minimumHeightInPx={500}
        backgroundOpacityLayer={{
          direction: 'to top'
        }}
      />

      <Slider
        slides={projects}
        heading="Seneste projekter"
        backgroundImage={{
          src: '/images/wall-in-lisbon.png',
          alt: ''
        }}
        backgroundOpacityLayer={{
          direction: 'to right'
        }}
      />

      <MasonryGrid
        items={frontPageProjectsGrid}
      />
    </>
  );
}
