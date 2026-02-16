import Hero from "@/Components/SectionComponents/Hero/Hero";

export default function contact() {
    return (
        <>
            <Hero
                backgroundImage={{
                    src: '/images/contact-hero.svg',
                    alt: ''
                }}
                heading='Contact'
                paragraph="Hey! How are you? Got a question about anything? Just send us an email and we’ll get back to you as soon as possible."
                backgroundOpacityLayer={{
                    direction: 'to bottom'
                }}
                textPosition="center"
                email='oxsilla.media@gmail.com'
                addCornerMarker
            />
        </>
    )
}