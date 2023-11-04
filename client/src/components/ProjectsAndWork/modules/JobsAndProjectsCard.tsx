import styles from './JobsAndProjectsCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

interface JobsAndProjectsCardProps {
    imgUrl: string,
    title: string,
    type: 'projects' | 'jobs',
}

export default function JobsAndProjectsCard({ type, imgUrl, title }: JobsAndProjectsCardProps) {
    return (
        <article className={styles.container}>
            <NavLink to={`/${type}/${title}`}>
                <div className={styles['hover-layer']} />
                <FontAwesomeIcon className={styles['hover-link-icon']} icon={faCircleInfo} bounce />
                <img className={styles.image} src={imgUrl} />
                <span className={styles.title}>{title}</span>
            </NavLink>
        </article>
    );
}