import styles from './DescriptionArticle.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

type DescriptionArticleProps = { achievements?: string[] }

export default function DescriptionArticle({ achievements }: DescriptionArticleProps) {
    return (
        <article style={{backgroundColor: 'black'}}>
            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} className={styles.description}>
                <h2>Contribution</h2>
                <h4>{achievements && achievements.join('. ')}</h4>
            </AnimationOnScroll>
        </article>
    );
}