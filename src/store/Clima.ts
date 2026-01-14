import { create } from "zustand";
import type { WeatherData } from "../types/dataClima";
import { obtenerClimaLugar } from "../services/Clima";

interface ClimaState {
    dataClima: WeatherData | null;
    ciudad: string;
    dias: number;
    handleChangeCiudad: (ciudad: string) => void;
    handleChangeDias: (dias: number) => void;
    obtenerClimaLugar: (ciudad: string, dias: number) => void;
    reset: () => void;
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
}));
