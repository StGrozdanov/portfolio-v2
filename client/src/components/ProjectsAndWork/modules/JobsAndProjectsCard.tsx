import styles from './JobsAndProjectsCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

interface JobsAndProjectsCardProps {
    imgUrl: string,
    title: string,
}

export default function JobsAndProjectsCard({ imgUrl, title }: JobsAndProjectsCardProps) {
    return (
        <article className={styles.container}>
            <div className={styles['hover-layer']} />
            <FontAwesomeIcon className={styles['hover-link-icon']} icon={faCircleInfo} bounce />
            <img className={styles.image} src={imgUrl} />
            <span className={styles.title}>{title}</span>
        </article>
    );
}