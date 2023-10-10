import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from './CarouselLinks.module.scss';

interface CarouselLinkProps {
    progress: number,
    currentLabel: string,
}

export default function CarouselLinks(carousel: CarouselLinkProps) {
    return (
        <article
            className={styles['see-details-article']}
            style={carousel.progress > 90 ? { opacity: 0 } : { opacity: 1 }}
        >
            <h2 className={styles.label}>{carousel.currentLabel}</h2>
            <div className={styles.link}>
                <p>view project</p>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </article>
    );
}