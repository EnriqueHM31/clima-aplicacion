import { useEffect } from "react";
import CardsClimas from "../components/ClimaPage/Sections/CardsClimas";
import Hero from "../components/Home/Hero";
import NavBar from "../components/Landing/NavBar";
import { useClimaStore } from "../store/climaStore";
import Footer from "../components/Landing/Footer";
export default function HomePage() {
    const { reset } = useClimaStore();

    useEffect(() => {
        reset();
    }, [reset]);

    return (
        <>
            <NavBar />
            <main className="flex h-full min-h-[80dvh] flex-col items-center justify-center mb-20 relative">
                <div className="bg-linear-to-t from-black to-transparent to-40% w-full h-screen absolute top-0 left-0 z-0 "></div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-2 md:px-6">
                    <Hero />

                    <CardsClimas />
                </div>
            </main>
            <Footer />
        </>
    );
}
