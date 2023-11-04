import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import styles from './HeadingImageArticle.module.scss';

interface HeadingImageArticleProps { jobImgURLs?: string[], companyName?: string }

export default function HeadingImageArticle({ jobImgURLs, companyName }: HeadingImageArticleProps) {
    const iconClickHandler = useCallback(() => {
        window.scroll({
            behavior: 'smooth',
            top: 500,
        })
    }, []);

    return (
        <article className={styles['img-article']}>
            <div
                className={styles['img-article-container']}
                style={{ backgroundImage: `url(${jobImgURLs ? jobImgURLs[0] : ''})` }}
            />
            <FontAwesomeIcon
                style={{ position: 'absolute', top: '50%', right: 20, fontSize: '4rem', cursor: 'pointer' }}
                icon={faArrowDownLong}
                color="white"
                beat
                onClick={iconClickHandler}
            />
        </article>
    );
}