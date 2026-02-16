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
          text: 'contact',
          href: '/contact'
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
          src: '/images/alek_høj.png',
          alt: 'alexander'
        }}
        cornerMarkers
        button={{
          text: 'what we do',
          href: '/competencies'
        }}
        textPosition="center"
        buttonPosition="center"
        minimumHeightInPx={1400}
        backgroundOpacityLayer={{
          direction: 'to top',
          sticky: true
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
