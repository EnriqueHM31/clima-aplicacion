import { useState } from "react";
import type { ForecastDaysProps } from "../../types/dataClima.d";
import ClimaDay from "../ClimaPage/ClimaDay";

export default function ForecastDays({ forecastday }: ForecastDaysProps) {
    const [openDay, setOpenDay] = useState<number | null>(null);

    const handleCambiarDia = (index: number | null) => setOpenDay(index);

    if (forecastday.length === 1) return null;

    return (
        <section className="mx-auto mt-10 max-w-4xl pb-8">
            <h2 className="mb-4 text-sm tracking-wide text-slate-400 capitalize">Pronóstico para los proximos días</h2>

            <div className="space-y-3">
                {forecastday.slice(1).map((day, index) => {
                    const isOpen = openDay === index;

                    return <ClimaDay key={day.date} day={day} index={index} isOpen={isOpen} handleCambiarDia={handleCambiarDia} />;
                })}
            </div>
        </section>
    );
}
