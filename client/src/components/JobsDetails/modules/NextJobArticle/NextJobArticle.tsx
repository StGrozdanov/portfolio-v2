import { useCallback } from 'react';
import { JobDetails } from '../../../../services/interfaces/portfolio-service-interfaces';
import styles from './NextJobArticle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface NextJobArticleProps {
    jobs: JobDetails[],
    currentJob: string | undefined
}

export default function NextJobArticle({ jobs, currentJob }: NextJobArticleProps) {
    const findTheNextArticle = useCallback((jobs: JobDetails[]) => {
        return jobs
            ?.map((job, currentJobIndex) => {
                if (job.company === currentJob && currentJobIndex + 1 < jobs.length) {
                    return jobs[currentJobIndex + 1];
                } else if (job.company === currentJob && currentJobIndex + 1 >= jobs.length) {
                    return jobs[0];
                }
            })
            .filter(job => job != undefined);
    }, [currentJob]);

    return (
        <article style={{ position: 'relative' }}>
            <section className={styles['next-project-redirect-section']}>
                <Link style={{ color: 'inherit' }} to={`/jobs/${findTheNextArticle(jobs)[0]?.company}`}>
                    <span>
                        Next Job
                        <FontAwesomeIcon icon={faArrowRightLong} beatFade style={{ marginLeft: 20 }} />
                    </span>
                </Link>
                <h2 className={styles['img-article-heading']}>{findTheNextArticle(jobs)[0]?.company}</h2>
            </section>
            <div
                className={styles['img-article-container']}
                style={{ backgroundImage: `url(${findTheNextArticle(jobs)[0]?.imgUrl[0]})` }}
            />
        </article>
    );
}