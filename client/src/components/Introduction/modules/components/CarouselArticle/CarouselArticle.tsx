import Resume from "../Resume/Resume";
import CarouselComponent from "../../../../CarouselComponent/CarouselComponent";
import { Line } from "rc-progress";
import styles from './CarouselArticle.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ImageProps } from "../../../../../interfaces/component-props-interfaces";

interface CarouselArticleProps {
    cvLink?: string,
    images: ImageProps,
    progress: number,
    currentLabel: string,
}

export default function CarouselArticle(carousel: CarouselArticleProps) {
    return (
        <article className={styles['carousel-article']}>
            <Resume link={carousel.cvLink} />
            <CarouselComponent {...carousel.images} />
            <Line
                percent={carousel.progress}
                strokeWidth={0.85}
                strokeColor='orange'
                trailColor='white'
            />
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
        </article>
    );
}