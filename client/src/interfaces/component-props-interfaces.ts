import { CarouselImage } from "../services/interfaces/portfolio-service-interfaces";

export interface CarouselProps {
    images: CarouselImage[],
    carouselChangeHandler: (label: string) => void,
    currentCarouselLabel: string,
    slideProgress: number,
}