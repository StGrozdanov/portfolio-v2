import axios from "axios";
import { TrackingInfoResponse } from "./interfaces/geo-location-service-interfaces";

const geoLocationApiInstance = axios.create({
    baseURL: 'https://geolocation-db.com/json',
    timeout: 3000,
});

const toTrackingInfo = (response: TrackingInfoResponse): TrackingInfoResponse => response;

export const locationAPI = {
    trackUser: async (): Promise<TrackingInfoResponse> => {
        const response = await geoLocationApiInstance.request({
            method: "GET",
            url: '/'
        });
        const result = await response.data;
        return toTrackingInfo(result);
    },
}