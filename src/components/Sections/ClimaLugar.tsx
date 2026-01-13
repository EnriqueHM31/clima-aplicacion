import { motion } from "framer-motion";
import type { WeatherData } from "../../types/dataClima";
import ForecastDays from "../ClimasDays";

interface HomeProps {
    data: WeatherData;
}

export default function ClimaLugarPage({ data }: HomeProps) {
    const { current, forecast } = data;
    const today = forecast.forecastday[0];

    console.log({ forecast });

    return (
        <main className="w-full max-w-7xl mx-auto">

            {/* ===== Clima actual ===== */}
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

            {/* ===== Pronóstico por hora ===== */}
            <section className="mt-10 no-scrollbar">
                <h2 className="text-sm uppercase tracking-wide text-slate-400 mb-3 text-center">
                    Pronóstico por hora
                </h2>

                <div className="flex gap-4 overflow-x-auto pb-2 items-center justify-center no-scrollbar">
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
                </div>
            </section>

            {/* ===== Pronóstico por días ===== */}

            <section className="mt-10">
                <ForecastDays forecastday={data.forecast.forecastday} />
            </section>
        </main>
    );
}
