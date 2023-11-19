import { portfolioAPI } from "../../../services/portfolio-service"

interface FileUploadHandlerProps {
    uploadType: 'uploadCV' | 'updateProjectImage' | 'updateJobImage' | 'addPartners' | 'addCarousel',
    formData: FormData,
    token: string,
    projectTitle?: string,
    companyName?: string,
}

const uploadEndpoints = {
    uploadCV: (formData: FormData, token: string) => portfolioAPI.uploadCV(formData, token),
    addPartners: (formData: FormData, token: string) => portfolioAPI.uploadPartnerLogo(formData, token),
    addCarousel: (formData: FormData, token: string) => portfolioAPI.uploadCarouselImage(formData, token),
    updateProjectImage: (formData: FormData, token: string, projectTitle: string) => portfolioAPI.uploadProjectImage(formData, token, projectTitle),
    updateJobImage: (formData: FormData, token: string, companyName: string) => portfolioAPI.uploadJobImage(formData, token, companyName),
}

export const fileUploadHandler = async ({
    formData,
    token,
    uploadType,
    companyName,
    projectTitle
}: FileUploadHandlerProps): Promise<string[]> => {
    let result: string[] = [];
    let response;

    switch (uploadType) {
        case "addCarousel":
            response = await uploadEndpoints.addCarousel(formData, token);
            result = response.length > 0 ? response[0].carousel_images : [];
            break;
        case "addPartners":
            response = await uploadEndpoints.addPartners(formData, token);
            result = response.length > 0 ? response[0].partners : [];
            break;
        case "uploadCV":
            response = await uploadEndpoints.uploadCV(formData, token);
            break;
        case "updateJobImage":
            response = await uploadEndpoints.updateJobImage(formData, token, companyName as string);
            result = response.length > 0 ? response[0].job_images : [];
            break;
        case "updateProjectImage":
            response = await uploadEndpoints.updateProjectImage(formData, token, projectTitle as string);
            result = response.length > 0 ? response[0].project_images : [];
            break;
        default:
            break;
    }
    return result;
}
