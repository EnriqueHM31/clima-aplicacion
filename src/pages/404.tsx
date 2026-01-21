import { motion } from "framer-motion";
import { FaHome, FaCloudMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound404() {
    return (
        <div className="relative flex min-h-screen items-center justify-center bg-linear-to-br from-[#050b1e] via-[#0a1f44] to-[#020617] px-6 text-white overflow-hidden">

            {/* Glow background */}
            <div className="absolute inset-0">
                <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
            </div>

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl"
            >
                {/* Icon */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 shadow-inner"
                >
                    <FaCloudMoon className="text-4xl text-blue-400" />
                </motion.div>

                {/* 404 */}
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl md:text-8xl font-extrabold tracking-tight text-blue-400 drop-shadow-lg"
                >
                    404
                </motion.h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
                    Página no encontrada
                </h2>

                {/* Description */}
                <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
                    Lo sentimos, la página que intentas visitar no existe o fue movida.
                    Puede que el clima haya cambiado… o el enlace esté roto 🌧️
                </p>

                {/* Button */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm md:text-base font-medium text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                    >
                        <FaHome />
                        Volver al inicio
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
