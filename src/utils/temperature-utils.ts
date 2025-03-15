import {IReport} from "../api/main-be-client.ts";

export const mapFromCelsius = (report: IReport): number => {
    return +report.temperature + 273.15;
}

export const mapFromFahrenheit = (report: IReport): number => {
    return (report.temperature - 32) * 5.0 / 9 + 273.15;
}

export const mapToKelvin = (report: IReport): number => {
    switch (report.unit) {
        case "K": return report.temperature;
        case "C": return mapFromCelsius(report);
        case "F": return mapFromFahrenheit(report);
        default: return report.temperature;
    }
}