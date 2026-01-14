// src/pages/ClimaLugar.tsx
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import LoaderGrid from "../components/Atomos/Loading";
import LocationInfoBar from "../components/ClimaPage/DataLocation";
import ClimaLugarPage from "../components/ClimaPage/Sections/ClimaLugar";
//import { obtenerClimaLugar } from "../services/Clima";
import SearchClima from "../components/Atomos/Search";
import { useClimaStore } from "../store/Clima";

export default function LugarClima() {
    const [searchParams] = useSearchParams();
    const { dataClima, handleChangeDias, handleChangeCiudad, obtenerClimaLugar } = useClimaStore();

    const { lugar } = useParams<{ lugar: string }>();
    useEffect(() => {
        const days = Number(searchParams.get("days") ?? 0);
        handleChangeDias(days);
        handleChangeCiudad(lugar ?? "");

        if (!lugar) return;

        const fetchData = async () => {
            //const data = await obtenerClimaLugar(lugar, days);
            obtenerClimaLugar(lugar, days);

        };

        fetchData();
    }, [lugar, handleChangeDias, searchParams, handleChangeCiudad, obtenerClimaLugar]);

    return (
        <section className="w-full text-white">
            {
                !dataClima ? <LoaderGrid /> :
                    <main className="w-full ">
                        <div className="my-5 flex flex-col gap-4 justify-end items-end max-w-6xl mx-auto mb-5">
                            <SearchClima />
                        </div>
                        <LocationInfoBar location={dataClima.location} />
                        <ClimaLugarPage data={dataClima} />
                    </main>
            }

        </section>
    );
}
