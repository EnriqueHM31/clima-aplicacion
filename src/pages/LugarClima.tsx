// src/pages/ClimaLugar.tsx
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import LoaderGrid from "../components/Atomos/Loading";
import LocationInfoBar from "../components/DataLocation";
import ClimaLugarPage from "../components/Sections/ClimaLugar";
import { InfoClima } from "../data/Clima";
import { useClimaStore } from "../store/Clima";

export default function LugarClima() {
    const { lugar } = useParams<{ lugar: string }>();
    const [searchParams] = useSearchParams();
    const { obtenerClima, dataClima } = useClimaStore();

    const days = Number(searchParams.get("days") ?? 1);

    useEffect(() => {
        if (!lugar) return;

        const fetchData = async () => {
            //const data = await obtenerClimaLugar(lugar, days);
            const data = InfoClima;
            console.log({ data });
            setTimeout(() => obtenerClima(data), 3000);
        };

        fetchData();
    }, [lugar, days, obtenerClima]);


    console.log({ dataClima });
    return (
        <section className="w-full text-white ">
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
