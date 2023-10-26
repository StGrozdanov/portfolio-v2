import { createContext, useState } from "react";
import { JobDetails } from "../services/interfaces/portfolio-service-interfaces";
import { ContainerProps } from "./types";

interface JobsContextType {
    getJobByCompanyName: (companyName: string) => JobDetails | undefined,
    updateJobs: (jobsData: JobDetails[]) => void,
}

export const JobsContext = createContext<JobsContextType>({
    getJobByCompanyName: () => undefined,
    updateJobs: () => console.log('jobs context is not initialized yet!')
});

export const JobsProvider = ({ children }: ContainerProps) => {
    const [jobs, setJobs] = useState<JobDetails[]>();

    const updateJobs = (jobsData: JobDetails[]) => setJobs(jobsData);

    const getJobByCompanyName = (companyName: string) => jobs?.find(job => companyName === job.company);

    return (
        <JobsContext.Provider value={{ getJobByCompanyName, updateJobs }}>
            {children}
        </JobsContext.Provider>
    );
}