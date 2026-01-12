import { obtenerClimaLugar } from "../services/Clima";

export async function fetchClima(lugar: string, days: number) {
    try {
        const data = await obtenerClimaLugar(lugar, days);
        return data
    } catch (error) {
        console.error(error);
        return { message: "Error al obtener el clima" }
    }
}
