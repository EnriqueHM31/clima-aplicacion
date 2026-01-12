import { motion } from "framer-motion";
import CardClima from "./CardClima";
import { WiCloud, WiDaySunny, WiRain } from "react-icons/wi";

export default function Hero() {
    return (
        <>
            {/* Contenido */}
            < div className="relative z-10 flex h-full flex-col items-center justify-center px-6 gap-10" >
                <div className="w-full max-w-4xl text-center">

                    {/* Título */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              tracking-tight
              bg-linear-to-r
              from-blue-200
              via-blue-500
              to-blue-400
              bg-clip-text
              text-transparent 
            "
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
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
              items-center
              justify-center
            "
                    >
                        <input
                            type="text"
                            placeholder="Ej. Ciudad de México"
                            className="
                w-full
                sm:w-80
                rounded-xl
                bg-white/10
                px-5
                py-3
                text-white
                placeholder:text-slate-400
                outline-none
                ring-1
                ring-white/10
                focus:ring-2
                focus:ring-blue-500
                backdrop-blur
              "
                        />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                w-full
                sm:w-auto
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/30
                hover:bg-blue-500
                transition
              "
                        >
                            Buscar clima
                        </motion.button>
                    </motion.form>

                </div>

                <section className="flex items-center md:flex-row flex-col justify-center gap-5">
                    <CardClima
                        ciudad="Ciudad de México"
                        hora="14:30"
                        temperatura={28}
                        viento="12 km/h"
                        humedad="40%"
                        icono={<WiDaySunny size={90} />}
                    />
                    <CardClima
                        ciudad="Guadalajara"
                        hora="16:10"
                        temperatura={22}
                        viento="18 km/h"
                        humedad="78%"
                        icono={<WiRain size={90} />}
                    />
                    <CardClima
                        ciudad="Monterrey"
                        hora="19:45"
                        temperatura={25}
                        viento="10 km/h"
                        humedad="55%"
                        icono={<WiCloud size={90} />}
                    />



                </section>
            </div>
        </>
    );
}
