import CarouselComponent from "../../../../Carousel/CarouselComponent";
import { Line } from "rc-progress";
import styles from './CarouselArticle.module.scss';
import { CarouselProps } from "../../../../../interfaces/component-props-interfaces";

interface CarouselArticleProps {
    images: CarouselProps,
    progress: number,
}

export default function CarouselArticle(carousel: CarouselArticleProps) {
    return (
        <article className={styles['carousel-article']}>
            <CarouselComponent {...carousel.images} />
            <Line
                percent={carousel.progress}
                strokeWidth={0.85}
                strokeColor='orange'
                trailColor='white'
            />
        </article>
    );
}