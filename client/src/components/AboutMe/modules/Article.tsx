import styles from './Article.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHeart, faUsers, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { ArticleProps, IconTypes } from './article-interfaces';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useState } from 'react';

const findIcon = (heading: string): IconDefinition => {
    const icons: IconTypes = {
        'Tech Stack': faCode,
        'Soft Skills': faUsers,
        'Hobbies': faHeart,
    }
    return icons[heading]
}

export default function Article({ heading, details, threshold }: ArticleProps) {
    const [ulIsExpanded, setUlIsExpanded] = useState(false);
    const contentHandler = () => setUlIsExpanded(!ulIsExpanded);

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
                    {
                        threshold && !ulIsExpanded
                            ?
                            details.map((detail, index) => {
                                if (index < threshold) {
                                    return < li key={detail} > {detail}</li>;
                                } else {
                                    return;
                                }
                            })
                            : details.map(detail => < li key={detail} > {detail}</li>)
                    }
                    {
                        threshold && !ulIsExpanded
                            ? <FontAwesomeIcon
                                className={styles.icon}
                                onClick={contentHandler}
                                icon={faCaretDown}
                                beatFade
                                color='orange'
                            />
                            : threshold
                                ? <FontAwesomeIcon
                                    className={styles.icon}
                                    onClick={contentHandler}
                                    icon={faCaretUp}
                                    beatFade
                                    color='orange'
                                />
                                : null
                    }
                </AnimationOnScroll>
            </ul>
        </article >
    );
}