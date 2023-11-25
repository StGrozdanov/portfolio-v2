import { useEffect, useState } from "react";
import { JobsAndProjectsInput, ProjectsDetails } from "../../../../../../../services/interfaces/portfolio-service-interfaces";
import { useProjectsContext } from "../../../../../../../hooks/useProjectsContext";
import { useJobsContext } from "../../../../../../../hooks/useJobsContext";
import { useAuthContext } from "../../../../../../../hooks/useAuthContext";
import { portfolioAPI } from "../../../../../../../services/portfolio-service";

export const useProjectsTemplate = (projectName: string) => {
    const [project, setProject] = useState<ProjectsDetails>();
    const { projects, getProjectByTitle } = useProjectsContext();
    const { jobs } = useJobsContext();
    const { token } = useAuthContext();

    useEffect(() => {
        const targetProject = getProjectByTitle(projectName);
        setProject(targetProject);
    }, [projectName]);

    const updateProjectImagesHandler = (images: string[]) => {
        if (project) {
            setProject((oldState) => {
                if (oldState) {
                    const newState = { ...oldState, imgUrl: images }
                    const updatedProjects = projects
                        .filter(currProject => currProject.title !== project.title);
                    updatedProjects.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs,
                            projects: updatedProjects,
                            id: 1,
                        },
                        authToken: token,
                    }

                    portfolioAPI
                        .updateUserJobsAndProjects(input)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));

                    return newState;
                }
            });
        }
    }

    const updateProjectTitleHandler = (title: string) => {
        if (project) {
            setProject((oldState) => {
                if (oldState) {
                    const newState = { ...oldState, title }
                    const updatedProjects = projects
                        .filter(currProject => currProject.title !== project.title);
                    updatedProjects.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs,
                            projects: updatedProjects,
                            id: 1,
                        },
                        authToken: token,
                    }

                    portfolioAPI
                        .updateUserJobsAndProjects(input)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));

                    return newState;
                }
            });
        }
    }

    const updateProjectStartedAtHandler = (startedAt: string) => {
        if (project) {
            setProject((oldState) => {
                const parsedDate = startedAt as unknown as Date;
                if (oldState) {
                    const newState = { ...oldState, startedAt: parsedDate }
                    const updatedProjects = projects
                        .filter(currProject => currProject.title !== project.title);
                    updatedProjects.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs,
                            projects: updatedProjects,
                            id: 1,
                        },
                        authToken: token,
                    }

                    portfolioAPI
                        .updateUserJobsAndProjects(input)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));

                    return newState;
                }
            });
        }
    }

    const updateProjectEndDateHandler = (endedAt: string) => {
        if (project) {
            setProject((oldState) => {
                const parsedDate = endedAt as unknown as Date;
                if (oldState) {
                    const newState = { ...oldState, endedAt: parsedDate }
                    const updatedProjects = projects
                        .filter(currProject => currProject.title !== project.title);
                    updatedProjects.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs,
                            projects: updatedProjects,
                            id: 1,
                        },
                        authToken: token,
                    }

                    portfolioAPI
                        .updateUserJobsAndProjects(input)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));

                    return newState;
                }
            });
        }
    }

    const updateProjectConceptHandler = (concept: string) => {
        if (project) {
            setProject((oldState) => {
                if (oldState) {
                    const newState = { ...oldState, concept }
                    const updatedProjects = projects
                        .filter(currProject => currProject.title !== project.title);
                    updatedProjects.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs,
                            projects: updatedProjects,
                            id: 1,
                        },
                        authToken: token,
                    }

                    portfolioAPI
                        .updateUserJobsAndProjects(input)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));

                    return newState;
                }
            });
        }
    }

    const updateProjectRepositoryHandler = (repository: string) => {
        if (project) {
            setProject((oldState) => {
                if (oldState) {
                    const newState = { ...oldState, repository }
                    const updatedProjects = projects
                        .filter(currProject => currProject.title !== project.title);
                    updatedProjects.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs,
                            projects: updatedProjects,
                            id: 1,
                        },
                        authToken: token,
                    }

                    portfolioAPI
                        .updateUserJobsAndProjects(input)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));

                    return newState;
                }
            });
        }
    }

    const updateProjectDescriptionHandler = (description: string) => {
        if (project) {
            setProject((oldState) => {
                if (oldState) {
                    const newState = { ...oldState, description }
                    const updatedProjects = projects
                        .filter(currProject => currProject.title !== project.title);
                    updatedProjects.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs,
                            projects: updatedProjects,
                            id: 1,
                        },
                        authToken: token,
                    }

                    portfolioAPI
                        .updateUserJobsAndProjects(input)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));

                    return newState;
                }
            });
        }
    }

    const updateProjectDeployLinkHandler = (link: string) => {
        if (project) {
            setProject((oldState) => {
                if (oldState) {
                    const newState = { ...oldState, link }
                    const updatedProjects = projects
                        .filter(currProject => currProject.title !== project.title);
                    updatedProjects.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs,
                            projects: updatedProjects,
                            id: 1,
                        },
                        authToken: token,
                    }

                    portfolioAPI
                        .updateUserJobsAndProjects(input)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));

                    return newState;
                }
            });
        }
    }

    const updateProjectTechStackHandler = (techStack: string) => {
        if (project) {
            setProject((oldState) => {
                if (oldState) {
                    const toArray = techStack.split('\n');

                    const newState = { ...oldState, techStack: toArray }
                    const updatedProjects = projects
                        .filter(currProject => currProject.title !== project.title);
                    updatedProjects.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs,
                            projects: updatedProjects,
                            id: 1,
                        },
                        authToken: token,
                    }

                    portfolioAPI
                        .updateUserJobsAndProjects(input)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));

                    return newState;
                }
            });
        }
    }

    return {
        project,
        updateProjectConceptHandler,
        updateProjectDeployLinkHandler,
        updateProjectDescriptionHandler,
        updateProjectEndDateHandler,
        updateProjectImagesHandler,
        updateProjectRepositoryHandler,
        updateProjectStartedAtHandler,
        updateProjectTechStackHandler,
        updateProjectTitleHandler,
    }
}