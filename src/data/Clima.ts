import type { WeatherData } from "../types/dataClima";

export const InfoClima: WeatherData = {
    location: {
        name: "Ciudad de México",
        region: "CDMX",
        country: "México",
        lat: 19.43,
        lon: -99.13,
        tz_id: "America/Mexico_City",
        localtime_epoch: 1768244400,
    },
    current: {
        temp_c: 14.6,
        feelslike_c: 14.7,
        humidity: 90,
        wind_kph: 3.6,
        uv: 0.9,
        is_day: 1,
        condition: {
            text: "Nublado",
            icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
            code: 1009,
        },
    },
    forecast: {
        forecastday: [
            {
                date: "2026-01-12",
                day: {
                    maxtemp_c: 18,
                    mintemp_c: 10,
                    condition: {
                        text: "Nublado",
                        icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
                        code: 1009,
                    },
                },
                hour: [
                    {
                        time: "2026-01-12 09:00",
                        temp_c: 13,
                        condition: {
                            text: "Nublado",
                            icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
                            code: 1009,
                        },
                    },
                    {
                        time: "2026-01-12 12:00",
                        temp_c: 15,
                        condition: {
                            text: "Nublado",
                            icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
                            code: 1009,
                        },
                    },
                    {
                        time: "2026-01-12 15:00",
                        temp_c: 17,
                        condition: {
                            text: "Parcialmente nublado",
                            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
                            code: 1003,
                        },
                    },
                    {
                        time: "2026-01-12 18:00",
                        temp_c: 14,
                        condition: {
                            text: "Nublado",
                            icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
                            code: 1009,
                        },
                    },
                ],
            },
        ],
    },
};
