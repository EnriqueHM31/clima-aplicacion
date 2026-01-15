import { useClimaDay } from "../../hooks/useClimaDay";
import type { ForecastDaysProps } from "../../types/dataClima.d";
import ClimaDay from "../ClimaPage/ClimaDay";

export default function ForecastDays({ forecastday }: ForecastDaysProps) {
    const { openDay, handleCambiarDia } = useClimaDay();

    if (forecastday.length === 1) return null;

    return (
        <section className="mx-auto mt-10 max-w-7xl pb-8">
            <h2 className="mb-4 px-4 text-sm tracking-wide text-slate-400 capitalize">Pronóstico para los proximos días</h2>

            <div className="space-y-3">
                {forecastday.slice(1).map((day, index) => {
                    const isOpen = openDay === index;

                    return <ClimaDay key={day.date} day={day} index={index} isOpen={isOpen} handleCambiarDia={handleCambiarDia} />;
                })}
            </div>
        </section>
    );
}
