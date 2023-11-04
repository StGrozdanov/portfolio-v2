import { CarouselImage, CarouselImageData } from "../services/interfaces/portfolio-service-interfaces";

export interface CarouselProps {
    images: CarouselImage[],
    carouselChangeHandler: (label: CarouselImageData) => void,
    currentCarouselLabel: CarouselImageData,
    slideProgress: number,
}