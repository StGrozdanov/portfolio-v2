import { useParams } from "react-router-dom";
import { useProjectsContext } from "../../hooks/useProjectsContext";
import { ProjectsContextType } from "../../contexts/ProjectsContext";
import HeadingImageArticle from "../JobsDetails/modules/HeadingImageArticle/HeadingImageArticle";
import ThreeSectionDescriptionArticle from "./modules/ThreeSectionDescriptionArticle/ThreeSectionDescriptionArticle";
import ImageArticle from "../JobsDetails/modules/ImageArticle/ImageArticle";
import DescriptionArticle from "./modules/DescriptionArticle/DescriptionArticle";
import NextProjectArticle from "./modules/NextProjectArticle/NextProjectArticle";

export default function ProjectsDetails() {
    const { getProjectByTitle, projects } = useProjectsContext() as ProjectsContextType;
    const params = useParams();

    const project = getProjectByTitle(params.title as string);

    return (
        <section>
            <HeadingImageArticle jobImgURL={project?.imgUrl[0]} />
            <ThreeSectionDescriptionArticle {...project} />
            <ImageArticle imgURL={project?.imgUrl[1]} />
            <DescriptionArticle description={project?.description} />
            <NextProjectArticle currentProject={project?.title} projects={projects} />
        </section>
    )
}