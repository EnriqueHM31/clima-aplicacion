import { create } from "zustand";
import type { WeatherData } from "../types/dataClima";

interface ClimaState {
    dataClima: WeatherData | null;
    ciudad: string;
    dias: number;
    handleChangeCiudad: (ciudad: string) => void;
    handleChangeDias: (dias: number) => void;
    obtenerClima: (dataClima: WeatherData) => void;
}


export const useClimaStore = create<ClimaState>((set) => ({
    dataClima: null,
    ciudad: "",
    dias: 1,
    handleChangeCiudad: (ciudad) => set({ ciudad }),
    handleChangeDias: (dias) => set({ dias }),
    obtenerClima: (dataClima) => set({ dataClima }),
}));
