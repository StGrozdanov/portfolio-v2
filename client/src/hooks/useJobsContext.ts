import { useContext } from "react";
import { JobsContext, JobsContextType } from "../contexts/JobsContext";

export const useJobsContext = (): JobsContextType => useContext(JobsContext) as JobsContextType;