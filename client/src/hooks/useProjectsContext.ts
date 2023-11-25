import { useContext } from "react";
import { ProjectsContext, ProjectsContextType } from "../contexts/ProjectsContext";

export const useProjectsContext = (): ProjectsContextType => useContext(ProjectsContext) as ProjectsContextType;