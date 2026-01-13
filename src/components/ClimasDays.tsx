import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { WeatherData } from "../types/dataClima";

interface ForecastDaysProps {
    forecastday: WeatherData["forecast"]["forecastday"];
}

export default function ForecastDays({ forecastday }: ForecastDaysProps) {
    const [openDay, setOpenDay] = useState<number | null>(null);

    return (
        <section className="mt-10 max-w-4xl mx-auto">
            <h2 className="text-sm capitalize tracking-wide text-slate-400 mb-4">
                Pronóstico por días
            </h2>

            <div className="space-y-3">
                {forecastday.map((day, index) => {
                    const isOpen = openDay === index;

                    return (
                        <article
                            key={day.date}
                            className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 overflow-hidden"
                        >
                            {/* ===== HEADER (DÍA) ===== */}
                            <button
                                onClick={() => setOpenDay(isOpen ? null : index)}
                                className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-white/5 transition"
                            >
                                <div>
                                    <p className="text-sm font-medium text-white">
                                        {new Date(day.date).toLocaleDateString("es-ES", {
                                            weekday: "long",
                                            day: "numeric",
                                            month: "short",
                                        })}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        {day.day.condition.text}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img
                                        src={`https:${day.day.condition.icon}`}
                                        alt={day.day.condition.text}
                                        className="h-8 w-8"
                                    />
                                    <span className="text-sm text-slate-300">
                                        {Math.round(day.day.maxtemp_c)}° /{" "}
                                        {Math.round(day.day.mintemp_c)}°
                                    </span>
                                </div>
                            </button>

                            {/* ===== HORAS ===== */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative h-48 overflow-x-auto overflow-y-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 "
                                    >
                                        <div className="timeline-scroll-inline animate-expand-horizontally sticky top-0 left-0 z-10 h-2 w-full origin-left bg-linear-to-r from-blue-500 to-blue-700"></div>

                                        <div className="flex h-full w-5xl items-center gap-4 p-6">
                                            {day.hour.map((hour) => (
                                                <div
                                                    key={hour.time}
                                                    className=" min-w-[90px] rounded-xl bg-black/40 p-3 flex flex-col items-center gap-2 ring-1 ring-white/10"
                                                >
                                                    <time className="text-xs text-slate-400">
                                                        {hour.time.split(" ")[1]}
                                                    </time>

                                                    <img
                                                        src={`https:${hour.condition.icon}`}
                                                        alt={hour.condition.text}
                                                        className="h-8 w-8"
                                                    />

                                                    <span className="text-sm font-semibold text-white">
                                                        {Math.round(hour.temp_c)}°
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </article>
                    );
                })}
            </div>

        </section>
    );
}
