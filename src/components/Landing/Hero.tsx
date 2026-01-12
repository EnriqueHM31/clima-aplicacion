import { motion } from "framer-motion";
import FormClima from "../FormClima";

export default function Hero() {
    return (
        <div className="w-full max-w-4xl text-center">

            {/* Título */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className=" text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-linear-to-r from-blue-200 via-blue-500 to-blue-400 bg-clip-text text-transparent"
            >
                Consulta el clima
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-4 text-base sm:text-lg text-slate-300"
            >
                Ingresa una ciudad y obtén el pronóstico actualizado al instante.
            </motion.p>

            {/* Formulario */}
            <FormClima />

        </div>
    );
}
