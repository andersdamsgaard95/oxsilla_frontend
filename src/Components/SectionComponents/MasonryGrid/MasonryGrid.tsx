'use client';

import { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import { MasonryGridItemType } from '@/types/types';
import styles from './styles/MasonryGrid.module.scss';
import SectionWrapper from '@/Components/WrapperComponents/SectionWrapper/SectionWrapper';
import ContentWrapper from '@/Components/WrapperComponents/ContentWrapper/ContentWrapper';
import ImageComponent from '@/Components/ElementComponents/Image/ImageComponent';
import Button from '@/Components/ElementComponents/Button/Button';
import Link from 'next/link';

interface MasonryGridProps {
    items: MasonryGridItemType[];
}

export default function MasonryGrid(props: MasonryGridProps) {
    const { width } = useWindowSize();
    const [columns, setColumns] = useState<MasonryGridItemType[][]>([]);
    const [hoveredItem, setHoveredItem] = useState<MasonryGridItemType | null>(null)

    useEffect(() => {
        const numColumns = width > 1000 ? 3 : 2;

        // Create empty arrays for each column
        const cols: MasonryGridItemType[][] = Array.from({ length: numColumns }, () => []);

        // Distribute items evenly across columns
        props.items.forEach((item, index) => {
            cols[index % numColumns].push(item);
        });

        setColumns(cols);
    }, [width, props.items]);

    return (
        <SectionWrapper topPadding="none">
            <ContentWrapper fullWidth>
                <div
                    className={styles.masonryGrid}
                >
                    {columns.map((col, i) => (
                        <div key={i} className={styles.column}>
                            {col.map((item, imageIndex) => (
                                <div
                                    key={imageIndex}
                                    className={styles.imgWrapper}
                                    style={{
                                        aspectRatio: item.aspectRatio,
                                    }}
                                    onMouseOver={() => setHoveredItem(item)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <ImageComponent image={item.image} />

                                    {hoveredItem !== null && hoveredItem === item && (
                                        <>
                                            <Link
                                                href={item.href}
                                                className={styles.hoverLayer}
                                            />

                                            <div className={styles.hoverContent}>
                                                <p>{item.text}</p>
                                                <Button
                                                    text={item.buttonText}
                                                    href={item.href}
                                                />
                                            </div>
                                        </>

                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </ContentWrapper>
        </SectionWrapper>
    );
}
