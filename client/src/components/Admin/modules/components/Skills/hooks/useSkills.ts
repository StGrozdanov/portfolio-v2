import { useEffect, useState } from "react";
import { AboutMeResponse } from "../../../../../../services/interfaces/portfolio-service-interfaces";
import { useAuthContext } from "../../../../../../hooks/useAuthContext";
import { portfolioAPI } from "../../../../../../services/portfolio-service";

export const useSkills = () => {
    const [skills, setSkills] = useState<AboutMeResponse>();
    const [isLoading, setIsLoading] = useState(true);
    const { token } = useAuthContext();

    useEffect(() => {
        portfolioAPI
            .getAboutMeInfo()
            .then(response => {
                setSkills(response);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const updateFieldHandler = (updatedField: string, fieldName: string) => {
        const toArray = updatedField.split('\n');

        setSkills((oldState) => {
            if (!oldState) {
                return oldState;
            }

            let updatedState: AboutMeResponse = { hobbies: [], softSkills: [], techStack: [] };

            switch (fieldName) {
                case ('tech stack'):
                    updatedState = { ...oldState, techStack: toArray }
                    break;
                case ('soft skills'):
                    updatedState = { ...oldState, softSkills: toArray }
                    break;
                case ('hobbies'):
                    updatedState = { ...oldState, hobbies: toArray }
                    break;
            }

            portfolioAPI
                .updateUserSkills({ ...updatedState, id: 1 }, token)
                .then(response => console.log(response))
                .catch(err => console.log(err));

            return updatedState;
        })
    }

    return {
        skills,
        isLoading,
        updateFieldHandler,
    }
}