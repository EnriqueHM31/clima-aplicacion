export async function ServiceWetherApi(lugar: string, days: number) {
    const url = `${import.meta.env.VITE_API}q=${lugar}&days=${days + 1}&aqi=yes&alerts=no`;

    const response = await fetch(url);
    const data = await response.json();

    // 🔴 IMPORTANTE: lanzar el error REAL
    if (!response.ok) {
        throw data; // ← aquí va el objeto { error: { code, message } }
    }

    return data;
}
