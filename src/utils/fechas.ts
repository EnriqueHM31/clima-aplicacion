export function getLocalTime(localtime_epoch: number): string {
    return new Date(localtime_epoch * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

export function formatDayDate(dateString: string): string {
    return new Date(`${dateString}T12:00:00`).toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });
}
