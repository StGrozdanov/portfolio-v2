import { useContext } from "react";
import { ProjectsContext } from "../contexts/ProjectsContext";

export const useProjectsContext = () => useContext(ProjectsContext);