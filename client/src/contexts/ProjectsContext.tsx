import { createContext, useEffect, useState } from "react";
import { ProjectsDetails } from "../services/interfaces/portfolio-service-interfaces";
import { ContainerProps } from "./types";
import { portfolioAPI } from "../services/portfolio-service";

export interface ProjectsContextType {
    getProjectByTitle: (title: string) => ProjectsDetails | undefined,
    projects: ProjectsDetails[],
}

export const ProjectsContext = createContext<ProjectsContextType | null>(null);

export const ProjectsProvider = ({ children }: ContainerProps) => {
    const [projects, setProjects] = useState<ProjectsDetails[]>([]);

    useEffect(() => {
        portfolioAPI
            .getJobsAndProjectsInfo()
            .then(response => updateProjects(response.projects))
            .catch(err => console.log(err));
    }, []);

    const updateProjects = (projectsData: ProjectsDetails[]) => setProjects(projectsData);

    const getProjectByTitle = (title: string) => projects?.find(project => title === project.title);

    return (
        <ProjectsContext.Provider value={{ getProjectByTitle, projects }}>
            {children}
        </ProjectsContext.Provider>
    );
}