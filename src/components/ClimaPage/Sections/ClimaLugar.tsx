import type { HomeProps } from "../../../types/componentes.d";
import ForecastDays from "../ClimasDays";
import ClimaActual from "./ClimaActual";
import ClimaHorasDayActual from "./ClimaHorasDayActual";

export default function ClimaLugarPage({ data }: HomeProps) {
    const { current, forecast } = data;

    return (
        <main className="mx-auto w-full max-w-6xl">
            {/* ===== Clima actual ===== */}
            <ClimaActual current={current} />

            {/* ===== Pronóstico por hora ===== */}
            <ClimaHorasDayActual today={forecast.forecastday[0]} />

            {/* ===== Pronóstico por días ===== */}
            <ForecastDays forecastday={data.forecast.forecastday} />
        </main>
    );
}
