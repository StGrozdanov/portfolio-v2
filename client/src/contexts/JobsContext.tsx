import { createContext, useEffect, useState } from "react";
import { JobDetails } from "../services/interfaces/portfolio-service-interfaces";
import { ContainerProps } from "./types";
import { portfolioAPI } from "../services/portfolio-service";

export interface JobsContextType {
    getJobByCompanyName: (companyName: string) => JobDetails | undefined,
    jobs: JobDetails[],
}

export const JobsContext = createContext<JobsContextType | null>(null);

export const JobsProvider = ({ children }: ContainerProps) => {
    const [jobs, setJobs] = useState<JobDetails[]>([]);

    useEffect(() => {
        portfolioAPI
            .getJobsAndProjectsInfo()
            .then(response => updateJobs(response.jobs))
            .catch(err => console.log(err));
    }, []);

    const updateJobs = (jobsData: JobDetails[]) => setJobs(jobsData);

    const getJobByCompanyName = (companyName: string) => jobs?.find(job => companyName === job.company);

    return (
        <JobsContext.Provider value={{ getJobByCompanyName, jobs }}>
            {children}
        </JobsContext.Provider>
    );
}