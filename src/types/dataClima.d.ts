// DataClima.d.ts (ejemplo resumido)
export interface WeatherCondition {
    text: string;
    icon: string;
    code: number;
}

export interface CurrentWeather {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    uv: number;
    is_day: number;
    condition: WeatherCondition;
}

export interface ForecastHour {
    time: string;
    temp_c: number;
    condition: WeatherCondition;
}

export interface ForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: WeatherCondition;
    };
}

export interface WeatherData {
    location: {
        name: string;
        country: string;
        region: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
    };
    current: CurrentWeather;
    forecast: {
        forecastday: {
            hour: ForecastHour[];
            day: ForecastDay["day"];
            date: string;
        }[];
    };
}
