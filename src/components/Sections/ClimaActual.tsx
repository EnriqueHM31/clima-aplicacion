import { motion } from "framer-motion";
import type { WeatherData } from "../../types/dataClima";

interface ClimaActualProps {
    current: WeatherData["current"];
}

export default function ClimaActual({ current }: ClimaActualProps) {
    return (
        <section className="max-w-md mx-auto text-center">

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex justify-center items-center gap-4 mt-4"
            >
                <span className="text-7xl font-bold">
                    {Math.round(current.temp_c)}°
                </span>

                <img
                    src={`https:${current.condition.icon}`}
                    alt={current.condition.text}
                    className="h-20 w-20"
                />
            </motion.div>

            <p className="mt-2 text-slate-300">
                {current.condition.text}
            </p>

            <p className="text-sm text-slate-400">
                Sensación térmica {current.feelslike_c}° · Humedad {current.humidity}%
            </p>
        </section>
    )
}