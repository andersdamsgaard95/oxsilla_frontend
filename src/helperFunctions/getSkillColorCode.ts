export function getSkillColorCode(skill: string) {
    const colorCodes = {
        shopify: {
            backgroundColor: '#95BF47',
            color: 'white'
        },
        react: {
            backgroundColor: '#61DAFB',
            color: 'black'
        },
        next: {
            backgroundColor: 'black',
            color: 'white'
        },
        webflow: {
            backgroundColor: '#146EF5',
            color: 'white'
        },
        strapi: {
            backgroundColor: '#4945FF',
            color: 'white'
        },
        js: {
            backgroundColor: '#F7DF1E',
            color: 'black'
        },
        default: {
            backgroundColor: '#951d1d',
            color: 'white'
        }
    }

    switch (skill.toLowerCase()) {
        case 'shopify':
            return colorCodes.shopify;
        case 'react':
            return colorCodes.react;
        case 'next.js':
            return colorCodes.next;
        case 'webflow':
            return colorCodes.webflow;
        case 'strapi headless cms':
            return colorCodes.strapi;
        case 'javascript':
            return colorCodes.js;
        default:
            return colorCodes.default;
    }
}