import styles from './Article.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHeart, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ArticleProps, IconTypes } from './article-interfaces';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const findIcon = (heading: string): IconDefinition => {
    const icons: IconTypes = {
        'Tech Stack': faCode,
        'Soft Skills': faUsers,
        'Hobbies': faHeart,
    }
    return icons[heading]
}

export default function Article({ heading, details }: ArticleProps) {
    return (
        <article>
            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
                <h3>
                    <FontAwesomeIcon icon={findIcon(heading)} color='orange' style={{ marginRight: 10 }} />
                    {heading}
                </h3>
            </AnimationOnScroll>
            <ul className={styles['list-container']}>
                <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
                    {details.map(detail => <li key={detail}>{detail}</li>)}
                </AnimationOnScroll>
            </ul>
        </article>
    );
}