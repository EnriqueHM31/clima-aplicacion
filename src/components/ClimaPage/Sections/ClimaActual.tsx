import { motion } from "framer-motion";
import type { ClimaActualProps } from "../../../types/dataClima.d";
import { traductor } from "../../../utils/traductor";

export default function ClimaActual({ current }: ClimaActualProps) {
    return (
        <section className="mx-auto max-w-full text-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-4 flex items-center justify-center gap-4"
            >
                <span className="text-7xl font-bold">{Math.round(current.temp_c)}°</span>

                <img src={`https:${current.condition.icon}`} alt={current.condition.text} className="h-20 w-20" />
            </motion.div>

            <p className="mt-2 text-slate-300">{traductor(current.condition.text.toLowerCase().trim())}</p>

            <p className="text-sm text-slate-400">
                Sensación térmica {current.feelslike_c}° · Humedad {current.humidity}%
            </p>
        </section>
    );
}
