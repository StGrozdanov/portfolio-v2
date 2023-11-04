import { useParams } from "react-router-dom";
import { useProjectsContext } from "../../hooks/useProjectsContext";
import { ProjectsContextType } from "../../contexts/ProjectsContext";

export default function ProjectsDetails() {
    const { getProjectByTitle } = useProjectsContext() as ProjectsContextType;
    const params = useParams();

    return (
        <section>
            <h1>{getProjectByTitle(params.title as string)?.title}</h1>
        </section>
    )
}