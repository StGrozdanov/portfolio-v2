import { useEffect, useState } from "react";
import { JobDetails, JobsAndProjectsInput } from "../../../../../../../services/interfaces/portfolio-service-interfaces";
import { useJobsContext } from "../../../../../../../hooks/useJobsContext";
import { useProjectsContext } from "../../../../../../../hooks/useProjectsContext";
import { useAuthContext } from "../../../../../../../hooks/useAuthContext";
import { portfolioAPI } from "../../../../../../../services/portfolio-service";

export const useJobsTemplate = (companyName: string) => {
    const [job, setJob] = useState<JobDetails>();
    const { jobs, getJobByCompanyName } = useJobsContext();
    const { projects } = useProjectsContext();
    const { token } = useAuthContext();

    useEffect(() => {
        const targetJob = getJobByCompanyName(companyName);
        setJob(targetJob);
    }, [companyName]);

    const updateJobImagesHandler = (images: string[]) => {
        if (job) {
            setJob((oldState) => {
                if (oldState) {
                    const newState = { ...oldState, imgUrl: images }
                    const updatedJobs = jobs.filter(currJob => currJob.company !== job.company);
                    updatedJobs.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs: updatedJobs,
                            projects,
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

    const updateJobCompanyNameHandler = (company: string) => {
        if (job) {
            setJob((oldState) => {
                if (oldState) {
                    const newState = { ...oldState, company }
                    const updatedJobs = jobs.filter(currJob => currJob.company !== job.company);
                    updatedJobs.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs: updatedJobs,
                            projects,
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

    const updateJobTitleHandler = (title: string) => {
        if (job) {
            setJob((oldState) => {
                if (oldState) {
                    const newState = { ...oldState, title }
                    const updatedJobs = jobs.filter(currJob => currJob.company !== job.company);
                    updatedJobs.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs: updatedJobs,
                            projects,
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

    const updateJobStartedAtHandler = (started_at: string) => {
        if (job) {
            setJob((oldState) => {
                if (oldState) {
                    const parsedDate = started_at as unknown as Date;

                    const newState = { ...oldState, started_at: parsedDate }
                    const updatedJobs = jobs.filter(currJob => currJob.company !== job.company);
                    updatedJobs.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs: updatedJobs,
                            projects,
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

    const updateJobEndedAtHandler = (ended_at: string) => {
        if (job) {
            setJob((oldState) => {
                if (oldState) {
                    const parsedDate = ended_at as unknown as Date;

                    const newState = { ...oldState, ended_at: parsedDate }
                    const updatedJobs = jobs.filter(currJob => currJob.company !== job.company);
                    updatedJobs.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs: updatedJobs,
                            projects,
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

    const updateJobConceptHandler = (concept: string) => {
        if (job) {
            setJob((oldState) => {
                if (oldState) {
                    const newState = { ...oldState, concept }
                    const updatedJobs = jobs.filter(currJob => currJob.company !== job.company);
                    updatedJobs.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs: updatedJobs,
                            projects,
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

    const updateJobTechStackHandler = (techStack: string) => {
        if (job) {
            setJob((oldState) => {
                if (oldState) {
                    const toArray = techStack.split('\n');

                    const newState = { ...oldState, techStack: toArray }
                    const updatedJobs = jobs.filter(currJob => currJob.company !== job.company);
                    updatedJobs.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs: updatedJobs,
                            projects,
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

    const updateJobContributionHandler = (contribution: string) => {
        if (job) {
            setJob((oldState) => {
                if (oldState) {
                    const toArray = contribution.split('\n');

                    const newState = { ...oldState, achievements: toArray }
                    const updatedJobs = jobs.filter(currJob => currJob.company !== job.company);
                    updatedJobs.push(newState);

                    const input: JobsAndProjectsInput = {
                        data: {
                            jobs: updatedJobs,
                            projects,
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
        job,
        updateJobCompanyNameHandler,
        updateJobConceptHandler,
        updateJobContributionHandler,
        updateJobEndedAtHandler,
        updateJobImagesHandler,
        updateJobStartedAtHandler,
        updateJobTechStackHandler,
        updateJobTitleHandler,
    }
}