import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { ImageProps } from "../../interfaces/component-props-interfaces";
import Slides from "./modules/components/Slides";
import styles from './CarouselComponent.module.scss';
import { useCarouselFadeInAnimation } from "./modules/hooks/useCarouselFadeInAnimation";
import { ReactElement, ReactNode } from "react";

export default function CarouselComponent(data: ImageProps) {
    
    const slideChangeHandler = (index: number, element: ReactNode) => {
        const el = element as ReactElement
        const slideLabel = el.props.label;
        data.changeHandler && data.changeHandler(slideLabel);
    }

    return (
        <Carousel
            key={data.images?.findIndex(image => image.imgURL)}
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            className={`carousel-container ${styles.container}`}
            showStatus={false}
            swipeable={true}
            animationHandler={useCarouselFadeInAnimation}
            transitionTime={800}
            interval={5000}
            showThumbs={false}
            stopOnHover={false}
            onChange={slideChangeHandler}
        >
            {
                data.images?.map((image, index) =>
                    <Slides key={image.imgURL ? image.imgURL : 'https://' + index} {...image} />
                )
            }
        </Carousel>
    )
}