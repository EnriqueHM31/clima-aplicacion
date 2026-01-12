/* ===============================
   Tipos base reutilizables
================================ */

export interface Condition {
    text: string;
    icon: string;
}

export interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    timezone: string;
    localtime: string;
}

/* ===============================
   Clima actual
================================ */

export interface CurrentWeather {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    wind_dir: string;
    uv: number;
    is_day: boolean;
    condition: Condition;
    last_updated: string;
}

/* ===============================
   Resumen del día
================================ */

export interface TodayWeather {
    date: string;
    max_temp_c: number;
    min_temp_c: number;
    avg_temp_c: number;
    chance_of_rain: number;
    condition: Condition;
    sunrise: string;
    sunset: string;
}

/* ===============================
   Clima por hora
================================ */

export interface HourlyWeather {
    time: string;
    temp_c: number;
    is_day: boolean;
    condition: Condition;
    wind_kph: number;
    humidity: number;
    chance_of_rain: number;
}

/* ===============================
   Estructura principal
================================ */

export interface WeatherData {
    location: Location;
    current: CurrentWeather;
    today: TodayWeather;
    hourly: HourlyWeather[];
}

/* ===============================
   Respuesta completa
================================ */

export type WeatherResponse = WeatherData[];
