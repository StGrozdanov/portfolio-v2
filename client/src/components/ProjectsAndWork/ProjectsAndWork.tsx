import { useEffect, useState } from "react";
import { JobsAndProjectsResponse } from "../../services/interfaces/portfolio-service-interfaces";
import { portfolioAPI } from "../../services/portfolio-service";
import JobsAndProjectsCard from "./modules/JobsAndProjectsCard";
import styles from './ProjectsAndWork.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function ProjectsAndWork() {
    const [projectsAndJobs, setProjectsAndJobs] = useState<JobsAndProjectsResponse>();

    useEffect(() => {
        portfolioAPI
            .getJobsAndProjectsInfo()
            .then(response => setProjectsAndJobs(response))
            .catch(err => console.log(err));
    }, []);

    return (
        <section id='work' className={styles.container}>
            {projectsAndJobs?.jobs.map(job =>
                <AnimationOnScroll key={job.company + job.title} animateIn='animate__fadeInLeft' animateOnce={true}>
                    <JobsAndProjectsCard
                        key={job.company + job.title}
                        imgUrl={job.imgUrl}
                        title={job.company}
                    />
                </AnimationOnScroll>
            )}
            {projectsAndJobs?.projects.map(project =>
                <AnimationOnScroll key={project.repository} animateIn='animate__fadeInUp' animateOnce={true}>
                    <JobsAndProjectsCard
                        key={project.repository}
                        imgUrl={project.imgUrl}
                        title={project.title}
                    />
                </AnimationOnScroll>
            )}
        </section>
    );
}