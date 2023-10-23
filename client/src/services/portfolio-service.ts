import axios from "axios";
import { AboutMeResponse, BasicInfoResponse } from "./interfaces/portfolio-service-interfaces";

const portfolioApiInstance = axios.create({
    baseURL: process.env.REACT_APP_PORTFOLIO_SERVICE_URL,
    timeout: 3000,
});

const toBasicUserInfo = (response: BasicInfoResponse): BasicInfoResponse => response;
const toAboutMeInfo = (response: AboutMeResponse): AboutMeResponse => response;

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
}