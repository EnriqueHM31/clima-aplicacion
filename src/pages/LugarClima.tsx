// src/pages/ClimaLugar.tsx
import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import LoaderGrid from "../components/Atomos/Loading";
import LocationInfoBar from "../components/ClimaPage/DataLocation";
import ClimaLugarPage from "../components/ClimaPage/Sections/ClimaLugar";
//import { obtenerClimaLugar } from "../services/Clima";
import SearchClima from "../components/Atomos/Search";
import { useClimaStore } from "../store/Clima";
import { toast } from "sonner";

export default function LugarClima() {
    const [searchParams] = useSearchParams();
    const { dataClima, handleChangeDias, handleChangeCiudad, obtenerClimaLugar, error } = useClimaStore();
    const { lugar } = useParams<{ lugar: string }>();
    const navigate = useNavigate();
    useEffect(() => {
        if (error) {
            navigate("/");
            toast.error(error);
        }
        const days = Number(searchParams.get("days") ?? 0);
        handleChangeDias(days);
        handleChangeCiudad(lugar ?? "");

        if (!lugar) return;

        const fetchData = async () => {
            //const data = await obtenerClimaLugar(lugar, days);
            obtenerClimaLugar(lugar, days);
        };

        fetchData();
    }, [lugar, handleChangeDias, searchParams, handleChangeCiudad, obtenerClimaLugar, error, navigate]);

    return (
        <section className="w-full text-white">
            {!dataClima ? (
                <LoaderGrid />
            ) : (
                <main className="w-full">
                    <div className="mx-auto my-5 mb-5 flex max-w-6xl flex-col items-end justify-end gap-4">
                        <SearchClima />
                    </div>
                    <LocationInfoBar location={dataClima.location} />
                    <ClimaLugarPage data={dataClima} />
                </main>
            )}
        </section>
    );
}
