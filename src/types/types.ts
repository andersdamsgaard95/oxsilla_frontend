export interface ImageType {
    src: string;
    alt: string;
}

export interface ButtonType {
    text: string;
    href: string;
    color?: 'black' | 'white';
}

export interface CTAType {
    text: string;
    href: string;
    color?: 'black' | 'white' | 'red';
}

export interface portfolioProjectType {
    title: string;
    image: ImageType;
    shortDescription: string;
    skillsUsed: string[];
    descriptionURL: string;
    info?: {
        date?: string;
        klient?: string;
    },
    casePageSections: {
        [key: string]: {
            heading: string;
            text: string;
        };
    },
    backgroundColor: string;
}

export interface MasonryGridItemType {
    image: ImageType;
    text: string;
    buttonText: string;
    href: string;
    aspectRatio: string;
}

export interface backgroundOpacityLayerType {
    direction: "to right" | "to left" | "to bottom" | "to top",
    sticky?: boolean
};

export interface competencyType {
    title: string,
    description: string;
}

export interface scrollArrowType {
    idToScrollTo: string;
}