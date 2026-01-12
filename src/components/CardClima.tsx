import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardClimaProps {
    ciudad: string;
    hora: string;
    temperatura: number;
    viento: string;
    humedad: string;
    icono: ReactNode;
}

export default function CardClima({ ciudad, hora, temperatura, viento, humedad, icono }: CardClimaProps) {
    return (
        <motion.section
            className="flex justify-center w-full px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.article
                className="
          w-full
          max-w-xl
          rounded-2xl
          bg-linear-to-b
          from-black
          via-slate-900
          to-blue-950
          p-6
          text-white
          shadow-xl
          ring-1
          ring-white/10
          backdrop-blur
        "
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
                {/* Header */}
                <header className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-blue-400">
                        {ciudad}
                    </h2>
                    <time className="text-sm text-slate-400">
                        {hora}
                    </time>
                </header>

                {/* Contenido principal */}
                <motion.main
                    className="mt-6 flex justify-center items-center text-blue-400 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="h-24 w-24">
                        {icono}
                    </div>
                    <motion.p
                        className="text-6xl font-bold tracking-tight text-white"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        {temperatura}°
                    </motion.p>
                </motion.main>

                {/* Detalles */}
                <footer className="mt-6 flex justify-between text-sm text-slate-300">
                    <motion.p
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        🌬 <span>{viento}</span>
                    </motion.p>

                    <motion.p
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        💧 <span>{humedad}</span>
                    </motion.p>
                </footer>
            </motion.article>
        </motion.section>
    );
}
