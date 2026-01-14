// src/pages/ClimaLugar.tsx
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import LoaderGrid from "../components/Atomos/Loading";
import LocationInfoBar from "../components/ClimaPage/DataLocation";
import ClimaLugarPage from "../components/ClimaPage/Sections/ClimaLugar";
import { obtenerClimaLugar } from "../services/Clima";
import { useClimaStore } from "../store/Clima";

export default function LugarClima() {
    const { lugar } = useParams<{ lugar: string }>();
    const [searchParams] = useSearchParams();
    const { obtenerClima, dataClima } = useClimaStore();


    const days = Number(searchParams.get("days") ?? 1);

    console.log({ days });

    useEffect(() => {
        if (!lugar) return;

        const fetchData = async () => {
            const data = await obtenerClimaLugar(lugar, days);
            //const data = InfoClima;
            console.log({ data });
            setTimeout(() => obtenerClima(data), 2000);
        };

        fetchData();
    }, [lugar, days, obtenerClima]);

    return (
        <section className="w-full text-white">
            {
                !dataClima ? <LoaderGrid /> :
                    <main className="w-full ">
                        <LocationInfoBar location={dataClima.location} />
                        <ClimaLugarPage data={dataClima} />
                    </main>
            }

        </section>
    );
}
