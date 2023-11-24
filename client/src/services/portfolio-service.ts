import axios from "axios";
import { AboutMeResponse, BasicInfoResponse, JobsAndProjectsResponse, SocialsResponse, LoginResponse, AuthData, AnalyticsFilter, AnalyticsResponse, VisitationCountResponse, Visitation, BasicUserInfo, PartnersUpdateResponse, CarouselsUpdateResponse, JobsUpdateResponse, ProjectsUpdateResponse, AboutMeRequest } from "./interfaces/portfolio-service-interfaces";

const portfolioApiInstance = axios.create({
    baseURL: process.env.REACT_APP_PORTFOLIO_SERVICE_URL,
    timeout: 3000,
});

const toBasicUserInfo = (response: BasicInfoResponse): BasicInfoResponse => response;
const toAboutMeInfo = (response: AboutMeResponse): AboutMeResponse => response;
const toJobsAndProjects = (response: JobsAndProjectsResponse): JobsAndProjectsResponse => response;
const toSocials = (response: SocialsResponse): SocialsResponse => response;
const toLoginResponse = (response: LoginResponse): LoginResponse => response;
const toAnalyticsResponse = (response: AnalyticsResponse): AnalyticsResponse => response;
const toTodayAnalyticsResponse = (response: VisitationCountResponse[]): VisitationCountResponse[] => response;
const toPartnersUpdateResponse = (response: PartnersUpdateResponse[]): PartnersUpdateResponse[] => response;
const toCarouselUpdateResponse = (response: CarouselsUpdateResponse[]): CarouselsUpdateResponse[] => response;
const toJobsUpdateResponse = (response: JobsUpdateResponse[]): JobsUpdateResponse[] => response;
const toProjectsUpdateResponse = (response: ProjectsUpdateResponse[]): ProjectsUpdateResponse[] => response;

export const portfolioAPI = {
    getBasicUserInfo: async (): Promise<BasicInfoResponse> => {
        const response = await portfolioApiInstance.request({
            method: "GET",
            url: '/users/basic-info'
        });
        const result = await response.data;
        return result.length > 0 ? toBasicUserInfo(result[0]) : Promise.reject('No user info returned from the API');
    },
    getAboutMeInfo: async (): Promise<AboutMeResponse> => {
        const response = await portfolioApiInstance.request({
            method: "GET",
            url: '/users/user-skills'
        });
        const result = await response.data;
        return result.length > 0 ? toAboutMeInfo(result[0]) : Promise.reject('No response returned from the API');
    },
    getJobsAndProjectsInfo: async (): Promise<JobsAndProjectsResponse> => {
        const response = await portfolioApiInstance.request({
            method: "GET",
            url: '/users/user-jobs-and-projects'
        });
        const result = await response.data;
        return result.length > 0 ? toJobsAndProjects(result[0]) : Promise.reject('No response returned from the API');
    },
    getSocialsInfo: async (): Promise<SocialsResponse> => {
        const response = await portfolioApiInstance.request({
            method: "GET",
            url: '/users/user-socials'
        });
        const result = await response.data;
        return result.length > 0 ? toSocials(result[0]) : Promise.reject('No response returned from the API');
    },
    authenticate: async (data: AuthData): Promise<LoginResponse> => {
        const response = await portfolioApiInstance.request({
            method: "POST",
            url: '/login',
            data
        });
        const result = await response.data;
        return result ? toLoginResponse(result) : Promise.reject('No response returned from the API');
    },
    getAnalythics: async (query: number | "today" | "yesterday" | "last7days" | "last30days" | "last90days" | "lastYear", authToken: string): Promise<AnalyticsResponse> => {
        const response = await portfolioApiInstance.request({
            method: "GET",
            url: `/analytics?${typeof query !== 'number' ? query : `quarter=${query}`}`,
            headers: { 'X-Authorization': authToken }
        });
        const result = await response.data;
        return result ? toAnalyticsResponse(result) : Promise.reject('No response returned from the API');
    },
    getAnalythicsForTodayCount: async (authToken: string): Promise<VisitationCountResponse[]> => {
        const response = await portfolioApiInstance.request({
            method: "GET",
            url: `/analytics/count`,
            headers: { 'X-Authorization': authToken }
        });
        const result = await response.data;
        return result ? toTodayAnalyticsResponse(result) : Promise.reject('No response returned from the API');
    },
    recordVisitation: async (data: Visitation): Promise<void> => {
        const response = await portfolioApiInstance.request({
            method: "POST",
            url: '/analytics',
            data
        });
        return response.status === 201 ? Promise.resolve() : Promise.reject('No response returned from the API')
    },
    uploadCV: async (data: FormData, authToken: string): Promise<void> => {
        const response = await portfolioApiInstance.request({
            method: "POST",
            url: '/upload-cv',
            data,
            headers: { 'X-Authorization': authToken }
        });
        return response.status === 201 ? Promise.resolve() : Promise.reject('No response returned from the API');
    },
    uploadProjectImage: async (data: FormData, authToken: string, projectTitle: string): Promise<ProjectsUpdateResponse[]> => {
        const response = await portfolioApiInstance.request({
            method: "POST",
            url: '/upload-project-image',
            data: {
                data,
                targetResourceTitle: projectTitle,
            },
            headers: { 'X-Authorization': authToken }
        });
        const result = await response.data;
        return response.status === 201 ? toProjectsUpdateResponse(result) : Promise.reject('No response returned from the API');
    },
    uploadJobImage: async (data: FormData, authToken: string, companyName: string): Promise<JobsUpdateResponse[]> => {
        const response = await portfolioApiInstance.request({
            method: "POST",
            url: '/upload-job-image',
            data: {
                data,
                targetResourceTitle: companyName,
            },
            headers: { 'X-Authorization': authToken }
        });
        const result = await response.data;
        return response.status === 201 ? toJobsUpdateResponse(result) : Promise.reject('No response returned from the API');
    },
    uploadPartnerLogo: async (data: FormData, authToken: string): Promise<PartnersUpdateResponse[]> => {
        const response = await portfolioApiInstance.request({
            method: "POST",
            url: '/add-partners',
            data,
            headers: { 'X-Authorization': authToken }
        });
        const result = await response.data;
        return response.status === 201 ? toPartnersUpdateResponse(result) : Promise.reject('No response returned from the API');
    },
    uploadCarouselImage: async (data: FormData, authToken: string): Promise<CarouselsUpdateResponse[]> => {
        const response = await portfolioApiInstance.request({
            method: "POST",
            url: '/add-carousel',
            data,
            headers: { 'X-Authorization': authToken }
        });
        const result = await response.data;
        return response.status === 201 ? toCarouselUpdateResponse(result) : Promise.reject('No response returned from the API');
    },
    updateBaseUserInfo: async (data: BasicUserInfo, authToken: string): Promise<void> => {
        const response = await portfolioApiInstance.request({
            method: "PUT",
            url: '/users/basic-info',
            data,
            headers: { 'X-Authorization': authToken }
        });
        return response.status === 200 ? Promise.resolve() : Promise.reject('No response returned from the API');
    },
    deleteImage: async (data: { imageURL: string }, authToken: string): Promise<void> => {
        const response = await portfolioApiInstance.request({
            method: "DELETE",
            url: '/image',
            data,
            headers: { 'X-Authorization': authToken }
        });
        return response.status === 200 ? Promise.resolve() : Promise.reject('No response returned from the API');
    },
    updateUserSkills: async (data: AboutMeRequest, authToken: string): Promise<void> => {
        const response = await portfolioApiInstance.request({
            method: "PUT",
            url: '/users/user-skills',
            data,
            headers: { 'X-Authorization': authToken }
        });
        return response.status === 200 ? Promise.resolve() : Promise.reject('No response returned from the API');
    },
}