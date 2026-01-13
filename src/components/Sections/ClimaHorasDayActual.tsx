import { motion } from "framer-motion";
import type { WeatherData } from "../../types/dataClima";
import ContenedorScrollAnimado from "../ContenedorScrollAnimado";

interface ClimaHorasDayActualProps {
    today: WeatherData["forecast"]["forecastday"][0];
}

export default function ClimaHorasDayActual({ today }: ClimaHorasDayActualProps) {
    return (
        <section className="mt-10 no-scrollbar max-w-7xl mx-auto w-full">
            <h2 className="text-sm uppercase tracking-wide text-slate-400 mb-3 text-center">
                Pronóstico por hora
            </h2>

            <ContenedorScrollAnimado>
                {today.hour.slice(0, 8).map((hour, index) => (
                    <motion.article
                        key={hour.time}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="min-w-[90px] rounded-2xl bg-white/5 backdrop-blur p-4 flex flex-col items-center gap-2 ring-1 ring-white/10"
                    >
                        <time className="text-xs text-slate-400">
                            {hour.time.split(" ")[1]}
                        </time>

                        <img
                            src={`https:${hour.condition.icon}`}
                            alt={hour.condition.text}
                            className="h-8 w-8"
                        />

                        <span className="text-sm font-semibold">
                            {Math.round(hour.temp_c)}°
                        </span>
                    </motion.article>
                ))}

            </ContenedorScrollAnimado>
        </section>
    )
}