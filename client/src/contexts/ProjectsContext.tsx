import { createContext, useState } from "react";
import { ProjectsDetails } from "../services/interfaces/portfolio-service-interfaces";
import { ContainerProps } from "./types";

interface ProjectsContextType {
    getProjectByTitle: (title: string) => ProjectsDetails | undefined,
    updateProjects: (projectsData: ProjectsDetails[]) => void,
}

export const ProjectsContext = createContext<ProjectsContextType>({
    getProjectByTitle: () => undefined,
    updateProjects: () => console.log('projects context is not initialized yet!')
});

export const ProjectsProvider = ({ children }: ContainerProps) => {
    const [projects, setProjects] = useState<ProjectsDetails[]>();

    const updateProjects = (projectsData: ProjectsDetails[]) => setProjects(projectsData);

    const getProjectByTitle = (title: string) => projects?.find(project => title === project.title);

    return (
        <ProjectsContext.Provider value={{ getProjectByTitle, updateProjects }}>
            {children}
        </ProjectsContext.Provider>
    );
}