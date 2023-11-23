import { useEffect, useState } from "react";
import { BasicInfoResponse, CarouselImage } from "../../../../../../services/interfaces/portfolio-service-interfaces";
import { useAuthContext } from "../../../../../../hooks/useAuthContext";
import { portfolioAPI } from "../../../../../../services/portfolio-service";

export const usePersonalInfo = () => {
    const [basicUserInfo, setBasicUserInfo] = useState<BasicInfoResponse>();
    const [isLoading, setIsLoading] = useState(true);
    const { token } = useAuthContext();

    useEffect(() => {
        portfolioAPI
            .getBasicUserInfo()
            .then(response => {
                setBasicUserInfo(response);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const updatePartnersHandler = (partners: string[]) => {
        if (basicUserInfo) {
            setBasicUserInfo((oldState) => {
                portfolioAPI
                    .updateBaseUserInfo({ ...basicUserInfo, partners, id: 1 }, token)
                    .then(response => console.log(response))
                    .catch(error => console.log(error));

                return { ...oldState as BasicInfoResponse, partners }
            });
        }
    }

    const updateCarouselImagesHandler = (carouselImages: string[]) => {
        if (basicUserInfo) {
            setBasicUserInfo((oldState) => {
                if (oldState) {
                    const updatedCarousel = oldState.carousel.map((carousel, index) => ({
                        ...carousel,
                        imgURL: carouselImages[index],
                    })).filter(carousel => carousel.imgURL);

                    portfolioAPI
                        .updateBaseUserInfo({ ...basicUserInfo, carousel: updatedCarousel, id: 1 }, token)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));

                    return { ...oldState as BasicInfoResponse, carousel: updatedCarousel }
                }
            });
        }
    }

    const addNewCarouselImageHandler = (carouselImage: CarouselImage) => {
        if (basicUserInfo) {
            setBasicUserInfo((oldState) => {
                if (oldState) {
                    const carousel = oldState.carousel;
                    carousel.push(carouselImage);

                    portfolioAPI
                        .updateBaseUserInfo({ ...basicUserInfo, carousel, id: 1 }, token)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));

                    return { ...oldState as BasicInfoResponse, carousel }
                }
            });
        }
    }

    const updateEmailRequestHandler = (email: string) => {
        if (basicUserInfo) {
            setBasicUserInfo((oldState) => {
                if (!oldState) {
                    return oldState;
                }

                portfolioAPI
                    .updateBaseUserInfo({ ...basicUserInfo, email, id: 1 }, token)
                    .then(response => console.log(response))
                    .catch(error => console.log(error));

                return { ...oldState, email }
            });
        }
    }

    const updateAboutMeRequestHandler = (aboutMe: string) => {
        if (basicUserInfo) {
            setBasicUserInfo((oldState) => {
                if (!oldState) {
                    return oldState;
                }

                portfolioAPI
                    .updateBaseUserInfo({ ...basicUserInfo, aboutMe, id: 1 }, token)
                    .then(response => console.log(response))
                    .catch(error => console.log(error));

                return { ...oldState, aboutMe }
            });
        }
    }

    return {
        basicUserInfo,
        isLoading,
        updateAboutMeRequestHandler,
        updateCarouselImagesHandler,
        updateEmailRequestHandler,
        updatePartnersHandler,
        addNewCarouselImageHandler,
    }
}