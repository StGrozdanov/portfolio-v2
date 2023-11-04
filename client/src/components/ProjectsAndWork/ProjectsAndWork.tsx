import { useJobsContext } from "../../hooks/useJobsContext";
import JobsAndProjectsCard from "./modules/JobsAndProjectsCard";
import styles from './ProjectsAndWork.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { JobsContextType } from "../../contexts/JobsContext";
import { useProjectsContext } from "../../hooks/useProjectsContext";
import { ProjectsContextType } from "../../contexts/ProjectsContext";

export default function ProjectsAndWork() {
    const { jobs } = useJobsContext() as JobsContextType;
    const { projects } = useProjectsContext() as ProjectsContextType;

    return (
        <section id='work' className={styles.container}>
            {jobs.map(job =>
                <AnimationOnScroll key={job.company + job.title} animateIn='animate__fadeInLeft' animateOnce={true}>
                    <JobsAndProjectsCard
                        key={job.company + job.title}
                        imgUrl={job.imgUrl[0]}
                        title={job.company}
                        type="jobs"
                    />
                </AnimationOnScroll>
            )}
            {projects.map(project =>
                <AnimationOnScroll key={project.repository} animateIn='animate__fadeInUp' animateOnce={true}>
                    <JobsAndProjectsCard
                        key={project.repository}
                        imgUrl={project.imgUrl[0]}
                        title={project.title}
                        type="projects"
                    />
                </AnimationOnScroll>
            )}
        </section>
    );
}