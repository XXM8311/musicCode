import { BASE_URL, TIME_OUT } from "./config";
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import XxmRequest from "./request";
export const http = new XxmRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT, 
    interceptors: {
        onRequestSuccess: (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`; 
            }
            return Promise.resolve(config); 
        },
        onRequestFailure: (error: any): Promise<any> => {
            return Promise.reject(error);
        },
        onResponseSuccess: (response: AxiosResponse): Promise<AxiosResponse> => {
            return Promise.resolve(response);
        },
        onResponseFailure: (error: any): Promise<any> => {
            return Promise.reject(error);
        },
    },
});