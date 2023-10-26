import { useContext } from "react";
import { JobsContext } from "../contexts/JobsContext";

export const useJobsContext = () => useContext(JobsContext);