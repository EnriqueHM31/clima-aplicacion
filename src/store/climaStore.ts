import { create } from "zustand";
import { ServiceWetherApi } from "../services/climaService";
import type { WeatherApiError } from "../types";
import type { WeatherData } from "../types/dataClima";
import { capitalize } from "../utils/traductor";

interface ClimaState {
    dataClima: WeatherData | null;
    ciudad: string;
    dias: number;
    error: WeatherApiError | null;
    handleChangeCiudad: (ciudad: string) => void;
    handleChangeDias: (dias: number) => void;
    obtenerClimaLugar: (ciudad: string, dias: number) => void;
    reset: () => void;
    crearNewUrl: ({ ciudad, dias }: { ciudad: string, dias: number }) => string;
}

interface ResponseWeatherData {
    ok: boolean;
    message: string;
    error: WeatherApiError;
    data: WeatherData;
}

export const useClimaStore = create<ClimaState>((set) => ({
    dataClima: null,
    ciudad: "",
    dias: 1,
    error: null,
    handleChangeCiudad: (ciudad) => {
        set({ ciudad })
    },
    handleChangeDias: (dias) => {
        set({ dias })
    },
    obtenerClimaLugar: async (ciudad, dias) => {

        const lugar = capitalize(ciudad);
        try {
            const { data, error } = (await ServiceWetherApi(lugar, dias)) as ResponseWeatherData;
            set({ dataClima: data, error: error });
        } catch (error: unknown) {
            set({
                dataClima: null,
                error: error as WeatherApiError,
            });
        }
    },
    reset: () =>
        set({
            ciudad: "",
            dias: 0,
            dataClima: null,
        }),
    crearNewUrl: ({ ciudad, dias }: { ciudad: string, dias: number }) => {
        const lugar = capitalize(ciudad);
        const params = new URLSearchParams();
        params.set("days", String(dias));
        if (dias === 0) return `/${lugar}`;
        return `/${lugar}?${params.toString()}`;
    }
}));
