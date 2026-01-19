// src/pages/ClimaLugar.tsx
import LoaderGrid from "../components/Atomos/Loading";
import LocationInfoBar from "../components/ClimaPage/DataLocation";
import ClimaLugarPage from "../components/ClimaPage/Sections/ClimaLugar";
//import { obtenerClimaLugar } from "../services/Clima";
import NavBar from "../components/Landing/NavBar";
import { useClima } from "../hooks/useClima";

export default function LugarClima() {
    const { dataClima } = useClima();
    return (
        <section className="w-full text-white">
            {!dataClima ? (
                <LoaderGrid />
            ) : (
                <>
                <NavBar />
                <main className="w-full">
                    <div className="mx-auto flex  gap-4 px-4">
                        <LocationInfoBar location={dataClima.location} />
                    </div>
                    <ClimaLugarPage data={dataClima} />
                </main>
                </>
            )}
        </section>
    );
}
