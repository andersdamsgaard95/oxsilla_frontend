import ContentWrapper from "@/Components/WrapperComponents/ContentWrapper/ContentWrapper";
import SectionWrapper from "@/Components/WrapperComponents/SectionWrapper/SectionWrapper";
import allProjects from '../../../JSON/portfolioProjects/portfolioProjects.json';
import CasePageComponent from "@/Components/SectionComponents/CasePageComponent/CasePageComponent";

interface CasePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function CasePage(props: CasePageProps) {

    const { slug } = await props.params;

    const project = allProjects.find(
        p => p.descriptionURL === slug
    );

    if (!project) {
        return <h1>Project not found</h1>
    }

    return (
        <>
            <CasePageComponent project={project} />
        </>

    )
}