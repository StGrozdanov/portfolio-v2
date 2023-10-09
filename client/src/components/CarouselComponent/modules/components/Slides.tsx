import { CarouselImage } from '../../../../services/interfaces/portfolio-service-interfaces';
import styles from './Slides.module.scss';

export default function Slides(image: CarouselImage) {
    return (
        <div>
            <img
                src={image.imgURL}
                alt='carousel-image'
                className={styles.img}
            />
        </div>
    );
}