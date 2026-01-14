// src/services/clima.service.ts
export async function obtenerClimaLugar(
    lugar: string,
    days: number
) {
    const url = `${import.meta.env.VITE_API}q=${lugar}&days=${days + 1}&aqi=yes&alerts=no`;
    console.log({ url });

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Error al obtener el clima");
    }

    return response.json();
}
