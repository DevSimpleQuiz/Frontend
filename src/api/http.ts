import axios, {AxiosRequestConfig} from 'axios';

const BASE_URL = "";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        timeout: DEFAULT_TIMEOUT,
        headers: {
            "content-type": "application/json",
        },
        withCredentials: true,
        ...config,
    });

    axiosInstance.interceptors.response.use((response)=>{
        return response;
    },
    (error) => {
    });
    
    return axiosInstance;
}

export const httpClient = createClient();

type ReqyestMethod = "get" | "post" | "put" | "delete";

export const requestHandler = async <T>(method: ReqyestMethod, url: string, payload?: T ) => {
    let response;

    switch(method) {
        case "post":
            response = await httpClient.post(url, payload);
            break;
        case "get":
            response = await httpClient.get(url);
            break;
        case "put":
            response = await httpClient.put(url, payload);
            break;
        case "delete":
            response = await httpClient.delete(url);
            break;
    }

    return response.data;
};