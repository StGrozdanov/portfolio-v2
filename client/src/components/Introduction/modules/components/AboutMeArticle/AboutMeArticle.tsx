import styles from './AboutMeArticle.module.scss';

type Text = { description: string | undefined };

export default function AboutMeArticle({ description }: Text) {
    return (
        <article className={styles['basic-info-article']}>
            <h3>Stoyan Grozdanov</h3>
            <h2>
                <span className={styles['orange-span']}>Full</span>
                stack
                <span className={styles['orange-span']}> Dev</span>
                eloper
            </h2>
            <summary className={styles['basic-info-summary']}>{description}</summary>
        </article>
    );
}