export const traductor = (texto: string) => {
    const traduccion: Record<string, string> = {
        "cloudy": "Nublado",
        "partly cloudy": "Parcialmente nublado",
        "rain": "Lluvia",
        "patchy rain nearby": "Lluvia parcial cerca",
        "sunny": "Soleado",
        "mist": "Niebla",
        "overcast": "Nublado",
    };

    console.log({ texto });
    return traduccion[texto] ?? texto;
};
