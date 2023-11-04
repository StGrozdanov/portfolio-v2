import styles from './DescriptionArticle.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

type DescriptionArticleProps = { description?: string }

export default function DescriptionArticle({ description }: DescriptionArticleProps) {
    return (
        <article style={{ backgroundColor: 'black' }}>
            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} className={styles.description}>
                <h2>Description</h2>
                <h4>{description}</h4>
            </AnimationOnScroll>
        </article>
    );
}