import {Client} from "./axios-client.ts";

export interface IReport {
    id?: string;
    temperature: number;
    unit: 'C' | 'F' | 'K';
    date: string;
    city: string;
}

export const getAllReports = () => {
    return Client.get<IReport[]>("/reports");
}

export const getSingleReport = (id: string) => {
    return Client.get<IReport>(`/reports/${id}`);
}

export const createReport = (data: IReport) => {
    return Client.post<IReport[], IReport>(`/reports`, data);
}

export const updateSingleReport = (id: string, data: IReport) => {
    return Client.put<IReport[], IReport>(`/reports/${id}`, data);
}

export const deleteReport = (id: string) => {
    return Client.delete<IReport>(`/reports/${id}`);
}