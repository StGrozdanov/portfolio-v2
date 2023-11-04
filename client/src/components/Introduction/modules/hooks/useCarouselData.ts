import { useCallback, useEffect, useState } from "react";
import { CarouselProps } from "../../../../interfaces/component-props-interfaces";
import { CarouselImage, CarouselImageData } from "../../../../services/interfaces/portfolio-service-interfaces";

export function useCarouselData() {
    const [currentCarouselLabel, setCurrentCarouselLabel] = useState<CarouselImageData>({ linkTitle: '', type: '', label: '' });
    const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([]);
    const [carouselSlideProgress, setCarouselSlideProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            carouselSlideProgress < 100
                ? setCarouselSlideProgress((oldProgress) => oldProgress + 0.04)
                : setCarouselSlideProgress(0);
        }, 1);
    }, [carouselSlideProgress]);

    const carouselChangeHandler = useCallback((label: CarouselImageData) => {
        setCurrentCarouselLabel(label);
        setCarouselSlideProgress(0);
    }, []);

    const carouselData: CarouselProps = {
        carouselChangeHandler,
        currentCarouselLabel,
        images: carouselImages,
        slideProgress: carouselSlideProgress,
    };

    return {
        carouselData,
        setCurrentCarouselLabel,
        setCarouselImages,
    };
}