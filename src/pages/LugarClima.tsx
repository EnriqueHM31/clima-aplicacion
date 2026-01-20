// src/pages/ClimaLugar.tsx
import LoaderGrid from "../components/Atomos/Loading";
import LocationInfoBar from "../components/ClimaPage/DataLocation";
import ClimaLugarPage from "../components/ClimaPage/Sections/ClimaLugar";
import Footer from "../components/Landing/Footer";
//import { obtenerClimaLugar } from "../services/Clima";
import NavBar from "../components/Landing/NavBar";
import { useClima } from "../hooks/useClima";

export default function LugarClima() {
    const { dataClima } = useClima();
    return (
        <section className="w-full text-white">
            <NavBar />
            {!dataClima ? (
                <LoaderGrid />
            ) : (
                <>
                    <main className="w-full pb-30 relative h-full">
                        <div className="bg-linear-to-t from-black/60 to-transparent to-40% w-full min-h-screen absolute bottom-0 left-0 -z-10 "></div>

                        <div className="mx-auto flex  gap-4 px-4">
                            <LocationInfoBar location={dataClima.location} />
                        </div>
                        <ClimaLugarPage data={dataClima} />
                    </main>
                </>
            )}
            <Footer />
        </section>
    );
}
