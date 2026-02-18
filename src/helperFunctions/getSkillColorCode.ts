export function getSkillColorCode(skill: string) {
    const colorCodes = {
        shopify: {
            backgroundColor: '#242F12',
            color: '#95BF47'
        },
        react: {
            backgroundColor: '#1E4752',
            color: '#61DAFB'
        },
        next: {
            backgroundColor: '#000000',
            color: '#ffffff'
        },
        webflow: {
            backgroundColor: '#010532',
            color: '#4353FF'
        },
        strapi: {
            backgroundColor: '#4945FF',
            color: 'white'
        },
        js: {
            backgroundColor: '#4C4407',
            color: '#F7DF1E'
        },
        ts: {
            backgroundColor: "#071523",
            color: "#3178C6"
        },
        html: {
            backgroundColor: "#3C190A",
            color: "#F06529"
        },
        css: {
            backgroundColor: "#000515",
            color: "#15BDFF"
        },
        lightroom: {
            backgroundColor: "#001E36",
            color: "#31A8FF"
        },
        figma: {
            backgroundColor: "#25143A",
            color: "#A259FF"
        },
        fotografi: {
            backgroundColor: "#1C1C1C",
            color: "#D97706"
        },
        photoshop: {
            backgroundColor: "#001E36",
            color: "#31A8FF"
        },
        illustrator: {
            backgroundColor: "#330000",
            color: "#FF9A00"
        },
        premierePro: {
            backgroundColor: "#2A0034",
            color: "#EA77FF"
        },
        express: {
            backgroundColor: "#3FB53F",
            color: "#444444"
        },
        vue: {
            backgroundColor: "#35495E",
            color: "#42B883"
        },
        dataSecurity: {
            backgroundColor: "#111827",
            color: "#22D3EE"
        },
        branding: {
            backgroundColor: "#440001",
            color: "#F24E1E"
        },
        node: {
            backgroundColor: "#1D5E1D",
            color: "#FFFFFF"
        },
        liquid: {
            backgroundColor: "#161C0B",
            color: "#A6FF00"
        },
        default: {
            backgroundColor: "#440001",
            color: "#F24E1E"
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
        case 'strapi':
            return colorCodes.strapi;
        case 'javascript':
            return colorCodes.js;
        case 'typescript':
            return colorCodes.ts;
        case 'html':
            return colorCodes.html;
        case 'css':
            return colorCodes.css;
        case 'lightroom':
            return colorCodes.lightroom;
        case 'figma':
            return colorCodes.figma;
        case 'fotografi':
            return colorCodes.fotografi;
        case 'photoshop':
            return colorCodes.photoshop;
        case 'illustrator':
            return colorCodes.illustrator;
        case 'premiere pro':
            return colorCodes.premierePro;
        case 'express':
            return colorCodes.express;
        case 'vue':
            return colorCodes.vue;
        case 'data security':
            return colorCodes.dataSecurity;
        case 'branding':
            return colorCodes.branding;
        case 'node.js':
            return colorCodes.node;
        case "liquid":
            return colorCodes.liquid;
        default:
            return colorCodes.default;
    }
}