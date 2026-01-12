// src/pages/ClimaLugar.tsx
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { obtenerClimaLugar } from "../services/Clima";
import type { WeatherResponse } from "../types/dataClima";

export default function LugarClima() {
    const { lugar } = useParams<{ lugar: string }>();
    const [data, setData] = useState<WeatherResponse>();
    const [searchParams] = useSearchParams();

    const days = Number(searchParams.get("days") ?? 1);

    useEffect(() => {
        if (!lugar) return;

        const fetchData = async () => {
            const data = await obtenerClimaLugar(lugar, days);
            console.log({ data });
            setData(data);
        };

        fetchData();
    }, [lugar, days]);


    console.log({ data });
    return (
        <section className="min-h-screen p-6 text-white">
            <h1 className="text-3xl font-bold">
                Clima en {lugar}
            </h1>

            <p className="text-slate-400">
                Pronóstico para {days} día(s)
            </p>
        </section>
    );
}
