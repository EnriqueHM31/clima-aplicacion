import type { BotonDayDayProps } from "../../types/componentes.d";
import { formatDayDate } from "../../utils/fechas";
import { traductor } from "../../utils/traductor";

export default function BotonDay({ day, index, isOpen, cambiarDia }: BotonDayDayProps) {
    const date = formatDayDate(`${day.date}T12:00:00`);
    return (
        <button
            onClick={() => cambiarDia(isOpen ? null : index)}
            className="flex w-full cursor-pointer items-center justify-between px-4 py-4 text-left transition hover:bg-white/5"
        >
            <div>
                <p className="text-sm font-medium text-white capitalize">
                    <span>{date}</span>
                </p>
                <p className="text-xs text-slate-400">{traductor(day.day.condition.text.toLowerCase().trim())}</p>
            </div>

            <div className="flex items-center gap-3">
                <img src={`https:${day.day.condition.icon}`} alt={day.day.condition.text} className="h-8 w-8" />
                <span className="text-sm text-slate-300">
                    {Math.round(day.day.maxtemp_c)}° / {Math.round(day.day.mintemp_c)}°
                </span>
            </div>
        </button>
    );
}
