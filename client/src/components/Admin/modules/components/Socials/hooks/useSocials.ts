import { useEffect, useState } from "react";
import { SocialMedia } from "../../../../../../services/interfaces/portfolio-service-interfaces";
import { useAuthContext } from "../../../../../../hooks/useAuthContext";
import { portfolioAPI } from "../../../../../../services/portfolio-service";

export const useSocials = () => {
    const [socials, setSocials] = useState<SocialMedia>();
    const [isLoading, setIsLoading] = useState(true);
    const { token } = useAuthContext();

    useEffect(() => {
        portfolioAPI
            .getSocialsInfo()
            .then(response => {
                setSocials(response.socialMedia);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const updateFacebookHandler = (facebook: string) => {
        setSocials((oldState) => {
            if (!oldState) {
                return oldState;
            }

            const newState = { ...oldState, facebook }

            portfolioAPI
                .updateUserSocials({ ...newState, id: 1 }, token)
                .then(response => console.log(response))
                .catch(err => console.log(err));

            return newState;
        });
    }

    const updateLinkedInHandler = (instagram: string) => {
        setSocials((oldState) => {
            if (!oldState) {
                return oldState;
            }

            const newState = { ...oldState, instagram }

            portfolioAPI
                .updateUserSocials({ ...newState, id: 1 }, token)
                .then(response => console.log(response))
                .catch(err => console.log(err));

            return newState;
        });
    }

    const updateGithubHandler = (github: string) => {
        setSocials((oldState) => {
            if (!oldState) {
                return oldState;
            }

            const newState = { ...oldState, github }

            portfolioAPI
                .updateUserSocials({ ...newState, id: 1 }, token)
                .then(response => console.log(response))
                .catch(err => console.log(err));

            return newState;
        });
    }

    return {
        socials,
        isLoading,
        updateFacebookHandler,
        updateGithubHandler,
        updateLinkedInHandler,
    }
}