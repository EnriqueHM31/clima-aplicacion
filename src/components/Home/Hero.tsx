import { motion } from "framer-motion";
import SearchClima from "../Atomos/Search";

export default function Hero() {
    return (
        <div className="w-full md:max-w-4xl text-center py-10 md:py-0">
            {/* Título */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-linear-to-r from-blue-200 via-blue-500 to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
            >
                Consulta el clima
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-4 text-base text-slate-300 sm:text-lg"
            >
                Ingresa una ciudad y obtén el pronóstico actualizado al instante.
            </motion.p>

            {/* Formulario */}
            <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <SearchClima />
            </div>
        </div>
    );
}
