import { useEffect, useState } from "react";
import { portfolioAPI } from "../../../../services/portfolio-service";
import { BasicInfoResponse } from "../../../../services/interfaces/portfolio-service-interfaces";
import { useCarouselData } from "./useCarouselData";

export function useFetchBasicUserInfo() {
    const [basicUserInfo, setBasicUserInfo] = useState<BasicInfoResponse>();
    const { carouselData, setCarouselImages, setCurrentCarouselLabel } = useCarouselData();

    useEffect(() => {
        portfolioAPI
            .getBasicUserInfo()
            .then(response => {
                setBasicUserInfo(response);
                setCarouselImages(response.carousel);
                setCurrentCarouselLabel(response.carousel[0].label);
            })
            .catch(err => console.log(err));
    }, []);

    return {
        basicUserInfo,
        carouselData,
    };
}