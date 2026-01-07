import Hero from "@/Components/SectionComponents/Hero/Hero";
import TextBlock from "@/Components/SectionComponents/TextBlock/TextBlock";
import TextBlockStyles from '../../Components/SectionComponents/TextBlock/styles/TextBlock.module.scss';

export default function Competencies() {
    return (
        <>
            <Hero
                backgroundImage={{
                    src: '/images/kompetencer_hero.png',
                    alt: ''
                }}
                heading={
                    <>
                        Kompetencer
                    </>
                }
                heading2="Hvert brand har en historie – vi hjælper dig med at fortælle din."
                paragraph="Gennem webdesign, foto, video og grafiske elementer skaber vi en visuel fortælling, der styrker din identitet og fanger din målgruppe."
                textPosition="center"
                addCornerMarker
                backgroundOpacityLayer={{
                    direction: 'to bottom'
                }}
                addScrollArrow
            />

            <TextBlock
                heading={
                    <>
                        <span>
                            Vi leverer færdige digitale oplevelser
                        </span>
                        <span className={TextBlockStyles.smallH2Line}>
                            – ikke bare hjemmesider.
                        </span>
                    </>
                }
                text="Hos Oxsilla kombinerer vi webudvikling, foto, video og grafisk design i én samlet løsning. Vi bygger hjemmesider til e-commerce, portfolier, informationssider og events/bookingsider, og sørger samtidig for alt visuelt content, så du får et gennemført udtryk fra første klik. Kort sagt: én samarbejdspartner, ét projekt, ét færdigt resultat."
                cornerMarkers
            //backgroundColor?: string;
            //BackgroundImage?: ImageType;
            //cornerMarkers?: boolean;
            //button?: ButtonType;
            //textPosition?: "left" | "center" | "right";
            //buttonPosition?: "left" | "center" | "right";
            />
        </>
    )
}