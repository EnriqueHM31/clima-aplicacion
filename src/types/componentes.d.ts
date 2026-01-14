import type { ReactNode } from "react";
import type { MotionVariant } from ".";
import type { Location, WeatherData } from "./dataClima";

interface CardClimaProps {
    ciudad: string;
    hora: string;
    temperatura: number;
    viento: string;
    humedad: string;
    icono: ReactNode;
}

interface ContenedorScrollAnimadoProps {
    children: React.ReactNode;
}

interface PropsLinkButton {
    text: string;
    icon: React.ReactNode;
    variants: MotionVariant;
}

interface HomeProps {
    data: WeatherData;
}

interface BotonDayDayProps {
    day: WeatherData["forecast"]["forecastday"][0];
    index: number;
    isOpen: boolean;
    cambiarDia: (index: number | null) => void;
}

interface ClimaDayProps {
    day: WeatherData["forecast"]["forecastday"][0];
    index: number;
    isOpen: boolean;
    handleCambiarDia: (index: number | null) => void;
}

interface LocationInfoBarProps {
    location: Location;
}