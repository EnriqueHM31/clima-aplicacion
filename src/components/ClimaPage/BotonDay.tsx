import type { WeatherData } from "../../types/dataClima";

interface BotonDayDayProps {
    day: WeatherData["forecast"]["forecastday"][0];
    index: number;
    isOpen: boolean;
    cambiarDia: (index: number | null) => void;
}

export default function BotonDay({ day, index, isOpen, cambiarDia }: BotonDayDayProps) {
    return (
        <button
            onClick={() => cambiarDia(isOpen ? null : index)}
            className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-white/5 transition cursor-pointer"
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
    )
}