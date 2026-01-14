import { motion } from "framer-motion";
import ContenedorScrollAnimado from "../../Atomos/ContenedorScrollAnimado";
import type { ClimaHorasDayActualProps } from "../../../types/dataClima.d";

export default function ClimaHorasDayActual({ today }: ClimaHorasDayActualProps) {
    return (
        <section className="no-scrollbar mx-auto mt-10 w-full">
            <h2 className="mb-3 text-center text-sm tracking-wide text-slate-400 capitalize">Pronóstico por hora</h2>

            <ContenedorScrollAnimado>
                {today.hour.slice(0, 8).map((hour, index) => (
                    <motion.article
                        key={hour.time}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex min-w-[90px] flex-col items-center gap-2 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur"
                    >
                        <time className="text-xs text-slate-400">{hour.time.split(" ")[1]}</time>

                        <img src={`https:${hour.condition.icon}`} alt={hour.condition.text} className="h-8 w-8" />

                        <span className="text-sm font-semibold">{Math.round(hour.temp_c)}°</span>
                    </motion.article>
                ))}
            </ContenedorScrollAnimado>
        </section>
    );
}
