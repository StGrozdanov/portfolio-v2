import styles from './ImageArticle.module.scss';

type ImageArticleProps = { imgURL?: string }

export default function ImageArticle({ imgURL }: ImageArticleProps) {
    return (
        <article>
            <div
                className={styles['img-article-container']}
                style={{ backgroundImage: `url(${imgURL})` }}
            />
        </article>
    );
}