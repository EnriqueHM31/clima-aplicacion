// src/pages/ClimaLugar.tsx
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import LoaderGrid from "../components/Atomos/Loading";
import LocationInfoBar from "../components/ClimaPage/DataLocation";
import ClimaLugarPage from "../components/ClimaPage/Sections/ClimaLugar";
//import { obtenerClimaLugar } from "../services/Clima";
import { useClimaStore } from "../store/Clima";
import { InfoClima } from "../data/Clima";
import SearchClima from "../components/Atomos/Search";

export default function LugarClima() {
    const [searchParams] = useSearchParams();
    const { obtenerClima, dataClima, handleChangeDias, handleChangeCiudad } = useClimaStore();

    const { lugar } = useParams<{ lugar: string }>();
    useEffect(() => {
        const days = Number(searchParams.get("days") ?? 0);
        handleChangeDias(days);
        handleChangeCiudad(lugar ?? "");

        if (!lugar) return;

        const fetchData = async () => {
            //const data = await obtenerClimaLugar(lugar, days);
            const data = InfoClima;
            console.log({ data });
            setTimeout(() => obtenerClima(data), 2000);
        };

        fetchData();
    }, [lugar, obtenerClima, handleChangeDias, searchParams, handleChangeCiudad]);

    return (
        <section className="w-full text-white">
            {
                !dataClima ? <LoaderGrid /> :
                    <main className="w-full ">
                        <LocationInfoBar location={dataClima.location} />
                        <div className="my5 flex flex-col gap-4 justify-end items-end max-w-7xl mx-auto">
                            <SearchClima />
                        </div>
                        <ClimaLugarPage data={dataClima} />
                    </main>
            }

        </section>
    );
}
