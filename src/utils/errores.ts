import type { WeatherApiError } from "../types";
// Mapa de errores → mensajes amigables
export const WEATHER_ERROR_MESSAGES: Record<number, string> = {
    1003: "Por favor ingresa una ciudad o ubicación válida.",
    1005: "Hubo un problema con la autenticación del servicio.",
    1006: "No se encontró la ciudad. Intenta con otro nombre.",
    2006: "Clave de API inválida. Intenta más tarde.",
    2007: "La clave de API ha sido deshabilitada.",
    2008: "Se alcanzó el límite de peticiones. Intenta más tarde.",
    9999: "Ocurrió un error inesperado. Intenta nuevamente.",
};


export function getErrorMessage(error: WeatherApiError): string {
    if (error) {
        const code = (error as WeatherApiError).code;
        return WEATHER_ERROR_MESSAGES[code] ?? WEATHER_ERROR_MESSAGES[9999];
    }

    return "No se pudo obtener la información del clima.";
}
