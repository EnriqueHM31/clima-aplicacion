export async function ServiceWetherApi(lugar: string, days: number) {
    const url = `${import.meta.env.VITE_API}/${lugar}?days=${days + 1}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data;
}
