'use client';

import { useEffect, useState } from 'react';
import IconComponent from '../Icon/IconComponent';
import styles from './styles/AnimatedLogo.module.scss';

interface AnimatedLogoProps {
  sectionId: string; // fx "hero-section"
  moveDistance: number; // hvor mange px logoet bevæger sig opad
}

export default function AnimatedLogo(props: AnimatedLogoProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const section = document.getElementById(props.sectionId);
    if (!section) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const sectionHeight = section.offsetHeight;

          // scrollFraction: hvor langt vi er scrollet igennem sektionen (0–1)
          const scrollFraction = Math.min(Math.max(-rect.top / sectionHeight, 0), 1);

          //const eased = Math.pow(scrollFraction, 8); // kvadrat → langsom start

          // beregn offset (bevæger sig opad)
          setOffset(-scrollFraction * props.moveDistance);

          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener('scroll', handleScroll);
            handleScroll();
          } else {
            window.removeEventListener('scroll', handleScroll);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.sectionId, props.moveDistance]);

  return (
    <div
      className={styles.logoWrapper}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.05s linear',
      }}
    >
      <IconComponent
        image={{
          src: '/icons/logo_colorfull.png',
          alt: 'logo'
        }}
        width={490}
        height={95.44}
      />
    </div>
  )
}