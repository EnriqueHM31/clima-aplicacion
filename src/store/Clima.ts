import { create } from "zustand";
import { obtenerClimaLugar } from "../services/Clima";
import type { WeatherData } from "../types/dataClima";

interface ClimaState {
    dataClima: WeatherData | null;
    ciudad: string;
    dias: number;
    handleChangeCiudad: (ciudad: string) => void;
    handleChangeDias: (dias: number) => void;
    obtenerClimaLugar: (ciudad: string, dias: number) => void;
    reset: () => void;
    crearNewUrl: ({ ciudad, dias }: { ciudad: string, dias: number }) => string;
}



export const useClimaStore = create<ClimaState>((set) => ({
    dataClima: null,
    ciudad: "",
    dias: 1,
    handleChangeCiudad: (ciudad) => {
        set({ ciudad })
    },
    handleChangeDias: (dias) => {
        set({ dias })
    },
    obtenerClimaLugar: async (ciudad, dias) => {
        try {
            const response = await obtenerClimaLugar(ciudad, dias);
            set({ dataClima: response });
        } catch (error) {
            console.log(error);
        }
    },
    reset: () =>
        set({
            ciudad: "",
            dias: 0,
            dataClima: null,
        }),
    crearNewUrl: ({ ciudad, dias }: { ciudad: string, dias: number }) => {
        const params = new URLSearchParams();
        params.set("days", String(dias));
        if (dias === 0) return `/${ciudad}`;
        return `/${ciudad}?${params.toString()}`;
    }
}));
