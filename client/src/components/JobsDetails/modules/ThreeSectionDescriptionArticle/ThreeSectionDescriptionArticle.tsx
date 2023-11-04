import styles from './ThreeSectionDescriptionArticle.module.scss';
import moment from "moment";
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface ThreeSectionDescriptionArticleProps {
    company?: string,
    title?: string,
    started_at?: Date,
    ended_at?: Date | null,
    concept?: string,
    techStack?: string[],
}

export default function ThreeSectionDescriptionArticle({
    company,
    title,
    started_at,
    ended_at,
    concept,
    techStack
}: ThreeSectionDescriptionArticleProps) {
    return (
        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} className={styles.description}>
            <section className={styles['description-section']}>
                <h3>Company</h3>
                <h4>{company}</h4>
                <h3>Position</h3>
                <h4>{title}</h4>
                <h3>Duration</h3>
                <h4>{moment(started_at).format('MMM YYYY')} - {moment(ended_at).format('MMM YYYY')}</h4>
            </section>
            <section className={styles['description-section']}>
                <h3>Concept</h3>
                <h4>{concept}</h4>
            </section>
            <section className={styles['description-section-contribution']}>
                <h3>Tech Stack</h3>
                <h4>{techStack && techStack.join(', ')}</h4>
            </section>
        </AnimationOnScroll>
    );
}