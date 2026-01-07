import SectionWrapper from '@/Components/WrapperComponents/SectionWrapper/SectionWrapper';
import styles from './styles/Hero.module.scss';
import { ButtonType, ImageType, backgroundOpacityLayerType } from '@/types/types';
import ContentWrapper from '@/Components/WrapperComponents/ContentWrapper/ContentWrapper';
import CornerMarkers from '@/Components/ElementComponents/CornerMarkers/CornerMarkers';
import AnimatedLogo from '@/Components/ElementComponents/AnimatedLogo/AnimatedLogo';
import ScrollArrow from '@/Components/ElementComponents/ScrollArrow/ScrollArrow';
import Button from '@/Components/ElementComponents/Button/Button';

interface HeroProps {
   backgroundColor?: string;
   backgroundImage?: ImageType;
   heading: React.ReactNode;
   heading2?: string;
   paragraph?: string;
   textPosition?: 'left top' | 'left center' | 'left bottom' | 'right top' | 'right center' | 'right bottom' | 'center';
   addCornerMarker?: boolean;
   addAnimatedLogo?: boolean;
   backgroundOpacityLayer?: backgroundOpacityLayerType;
   addScrollArrow?: boolean;
   button?: ButtonType;
}

export default function Hero(props: HeroProps) {

   const textPositionClass1 = props.textPosition?.includes('left') ? styles.left : props.textPosition?.includes('right') ? styles.right : styles.justifyCenter;
   const textPositionClass2 = props.textPosition?.includes('top') ? styles.top : props.textPosition?.includes('bottom') ? styles.bottom : styles.alignCenter;

   return (
      <SectionWrapper
         backgroundColor={props.backgroundColor}
         backgroundImage={props.backgroundImage}
         topPadding='none'
         bottomPadding='none'
         backgroundOpacityLayer={props.backgroundOpacityLayer}
      >
         <ContentWrapper>
            <section id='hero-section' className={`${styles.wrapper} ${textPositionClass1} ${textPositionClass2}`}>

               <div className={`${styles.heroContentDiv} ${props.textPosition === 'center' ? styles.centerLogo : props.textPosition?.includes('right') ? styles.rightAlignLogo : ''}`}>
                  {props.addAnimatedLogo && (
                     <AnimatedLogo
                        sectionId='hero-section'
                        moveDistance={500}
                     />
                  )}

                  {props.addCornerMarker ? (
                     <CornerMarkers
                        leftWidth={20}
                        rightWidth={30}
                        animateOnScroll={{
                           sectionElementId: 'hero-section',
                           triggerFromTop: true,
                           growOrShrink: 'grow'
                        }}
                     >
                        <h1 className={`${styles.heading} ${props.textPosition === 'center' ? styles.textAlignCenter : ''}`}>{props.heading}</h1>
                     </CornerMarkers>
                  ) :
                     <h1 className={`${styles.heading} ${props.textPosition === 'center' ? styles.textAlignCenter : ''}`}>{props.heading}</h1>
                  }

                  {props.heading2 && (
                     <h2>{props.heading2}</h2>
                  )}

                  {props.paragraph && (
                     <p>{props.paragraph}</p>
                  )}

                  {props.button && (
                     <Button
                        text={props.button.text}
                        href={props.button.href}
                     />
                  )}

               </div>

               {props.addScrollArrow && (
                  <ScrollArrow />
               )}

            </section>
         </ContentWrapper>
      </SectionWrapper>
   )
}