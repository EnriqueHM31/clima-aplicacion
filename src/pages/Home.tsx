import Hero from "../components/Home/Hero";
import NavBar from "../components/Landing/NavBar";
import CardsClimas from "../components/ClimaPage/Sections/CardsClimas";
import { useEffect } from "react";
import { useClimaStore } from "../store/climaStore";
export default function HomePage() {
    const { reset } = useClimaStore();

    useEffect(() => {
        reset();
    }, [reset]);

    return (
        <>
            <NavBar />
            <main className="flex h-full min-h-[80dvh] flex-col items-center justify-center">
                <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-6">
                    <Hero />

                    <CardsClimas />
                </div>
            </main>
        </>
    );
}
