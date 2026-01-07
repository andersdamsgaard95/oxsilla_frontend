export interface ImageType {
    src: string;
    alt: string;
}

export interface ButtonType {
    text: string;
    href: string;
    color?: 'black' | 'white';
}

export interface portfolioProjectType {
    title: string;
    image: ImageType;
    shortDescription: string;
    skillsUsed: string[];
    descriptionURL: string;
}

export interface MasonryGridItemType {
    image: ImageType;
    text: string;
    buttonText: string;
    href: string;
    aspectRatio: string;
}

export interface backgroundOpacityLayerType {
    direction: "to right" | "to left" | "to bottom" | "to top"
};