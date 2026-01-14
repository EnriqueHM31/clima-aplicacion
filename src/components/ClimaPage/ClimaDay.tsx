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

export default function ClimaDay({ day, index, isOpen, handleCambiarDia }: ClimaDayProps) {
    return (
        <article
            key={day.date}
            className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 overflow-hidden"
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
                                className=" min-w-[90px] rounded-xl bg-black/40 p-3 flex flex-col items-center gap-2 ring-1 ring-white/10"
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
    )
}