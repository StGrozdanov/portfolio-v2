import styles from './ProjectsAndJobs.module.scss';
import Dropdown from '../../../../Dropdown/Dropdown';
import { useState } from 'react';
import { useJobsContext } from '../../../../../hooks/useJobsContext';
import { useProjectsContext } from '../../../../../hooks/useProjectsContext';
import ProjectsTemplate from './modules/ProjectsTemplate';
import JobsTemplate from './modules/JobsTemplate';

export default function ProjectsAndJobs() {
    const [type, setType] = useState('Choose Type');
    const [options, setOptions] = useState('Options');
    const { jobs } = useJobsContext();
    const { projects } = useProjectsContext();

    const typeClickHandler = (type: string) => {
        setType(type);
        setOptions('Options');
    };

    return (
        <article className={styles.container}>
            <h1>Projects and jobs</h1>
            <section className={styles['dropdown-section']}>
                <Dropdown title={type}>
                    <a
                        href="#"
                        onClick={() => typeClickHandler('Job')}
                    >
                        Job
                    </a>
                    <a
                        href="#"
                        onClick={() => typeClickHandler('Project')}
                    >
                        Project
                    </a>
                </Dropdown>
                <Dropdown title={options}>
                    {
                        type === 'Job'
                            ? jobs.map(job => {
                                return <a href='#' key={job.company} onClick={() => setOptions(job.company)}>{job.company}</a>
                            })
                            : type === 'Project'
                                ? projects.map(project => {
                                    return <a href='#' key={project.title} onClick={() => setOptions(project.title)}>{project.title}</a>
                                })
                                : null
                    }
                </Dropdown>
            </section>
            {
                type === 'Project'
                    ? <ProjectsTemplate projectName={options} />
                    : type === 'Job'
                        ? <JobsTemplate companyName={options} />
                        : null
            }
        </article>
    );
}
