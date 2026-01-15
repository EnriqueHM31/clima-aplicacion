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
import ICONO from "/logo.ico";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
                    <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4">
                        <Link to="/" className="flex flex-1 items-center gap-4">
                            <motion.picture
                                className="flex size-12 items-center justify-center rounded-full bg-white object-cover p-2"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeIn" }}
                            >
                                <img src={ICONO} alt="logo" className="object-cover" />
                            </motion.picture>
                            <motion.h1
                                className="text-2xl font-bold text-white"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeIn" }}
                            >
                                Aplicacion del clima
                            </motion.h1>
                        </Link>
                        <div className="flex items-end justify-end gap-4 py-4">
                            <SearchClima />
                        </div>
                    </div>
                    <div className="mx-auto flex max-w-6xl gap-4 px-4">
                        <LocationInfoBar location={dataClima.location} />
                    </div>
                    <ClimaLugarPage data={dataClima} />
                </main>
            )}
        </section>
    );
}
