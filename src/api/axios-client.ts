import axios, {AxiosInstance, AxiosResponse} from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export class ApiClient {

    axiosInstance: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    async get<T>(url: string): Promise<AxiosResponse<T>> {
        return await this.axiosInstance.get<T>(url);
    }

    async post<T, D>(url: string, data: D): Promise<AxiosResponse<T>> {
        return await this.axiosInstance.post<T>(url, data);
    }

    async put<T, D>(url: string, data: D): Promise<AxiosResponse<T>> {
        return await this.axiosInstance.put<T>(url, data);
    }

    async delete<T>(url: string): Promise<AxiosResponse<T>> {
        return await this.axiosInstance.delete<T>(url);
    }
}

export const Client = new ApiClient(axiosInstance);