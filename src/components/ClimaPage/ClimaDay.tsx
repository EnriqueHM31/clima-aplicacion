import { AnimatePresence } from "framer-motion";
import type { WeatherData } from "../../types/dataClima";
import ContenedorScrollAnimado from "../Atomos/ContenedorScrollAnimado";
import BotonHeaderDay from "./BotonDay";

interface ClimaDayProps {
    day: WeatherData["forecast"]["forecastday"][0];
    index: number;
    isOpen: boolean;
    handleCambiarDia: (index: number | null) => void;
}

export default function ClimaDay({
    day,
    index,
    isOpen,
    handleCambiarDia,
}: ClimaDayProps) {
    return (
        <article
            key={day.date}
            className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur"
        >
            {/* ===== HEADER (DÍA) ===== */}
            <BotonHeaderDay
                day={day}
                index={index}
                isOpen={isOpen}
                cambiarDia={handleCambiarDia}
            />

            {/* ===== HORAS ===== */}
            <AnimatePresence>
                {isOpen && (
                    <ContenedorScrollAnimado>
                        {day.hour.map((hour) => (
                            <div
                                key={hour.time}
                                className="flex min-w-[90px] flex-col items-center gap-2 rounded-xl bg-black/40 p-3 ring-1 ring-white/10"
                            >
                                <time className="text-xs text-slate-400">
                                    {hour.time.split(" ")[1]}
                                </time>

                                <img
                                    src={`https:${hour.condition.icon}`}
                                    alt={hour.condition.text}
                                    className="h-8 w-8"
                                />

                                <span className="text-sm font-semibold text-white">
                                    {Math.round(hour.temp_c)}°
                                </span>
                            </div>
                        ))}
                    </ContenedorScrollAnimado>
                )}
            </AnimatePresence>
        </article>
    );
}
