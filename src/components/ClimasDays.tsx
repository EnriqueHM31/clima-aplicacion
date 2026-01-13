import { useState } from "react";
import type { WeatherData } from "../types/dataClima";
import ClimaDay from "./ClimaDay";

interface ForecastDaysProps {
    forecastday: WeatherData["forecast"]["forecastday"];
}

export default function ForecastDays({ forecastday }: ForecastDaysProps) {
    const [openDay, setOpenDay] = useState<number | null>(null);

    const handleCambiarDia = (index: number | null) => setOpenDay(index);

    return (
        <section className="mt-10 max-w-4xl mx-auto">
            <h2 className="text-sm capitalize tracking-wide text-slate-400 mb-4">
                Pronóstico por días
            </h2>

            <div className="space-y-3">
                {forecastday.map((day, index) => {
                    const isOpen = openDay === index;

                    return (
                        <ClimaDay
                            key={day.date}
                            day={day}
                            index={index}
                            isOpen={isOpen}
                            handleCambiarDia={handleCambiarDia}
                        />
                    );
                })}
            </div>

        </section>
    );
}
