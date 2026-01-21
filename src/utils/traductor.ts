export const traductor = (texto: string) => {
    const traduccion: Record<string, string> = {
        "cloudy": "Nublado",
        "partly cloudy": "Parcialmente nublado",
        "rain": "Lluvia",
        "patchy rain nearby": "Lluvia parcial cerca",
        "sunny": "Soleado",
        "mist": "Niebla",
        "overcast": "Completamente nublado",
        "moderate or heavy snow showers": "Lluvia moderada o fuerte",
        "fog": "Niebla",
        "moderate rain": "Lluvia moderada",
    };

    return traduccion[texto] ?? texto;
};

export function capitalize(texto: string): string {
    const limpio = texto.trim().toLowerCase();
    return limpio.charAt(0).toUpperCase() + limpio.slice(1);
}
