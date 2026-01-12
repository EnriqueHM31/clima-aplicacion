import { create } from "zustand";

interface ClimaState {
    ciudad: string;
    dias: number
    handleChangeCiudad: (ciudad: string) => void;
    handleChangeDias: (dias: number) => void;
}

export const useClimaStore = create<ClimaState>((set) => ({
    ciudad: "",
    dias: 0,
    handleChangeCiudad: (ciudad: string) => set({ ciudad }),
    handleChangeDias: (dias: number) => set({ dias }),
}))