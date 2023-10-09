import { CarouselImage } from "../services/interfaces/portfolio-service-interfaces";

export interface ImageProps {
    images?: CarouselImage[],
    changeHandler?: (label: string) => void,
}