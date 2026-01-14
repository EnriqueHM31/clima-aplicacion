import Hero from "../components/Landing/Hero";
import NavBar from "../components/Landing/NavBar";
import CardsClimas from "../components/ClimaPage/Sections/CardsClimas";
export default function HomePage() {

    return (
        <>
            <NavBar />
            <main className="flex flex-col items-center justify-center min-h-[80dvh] h-full">
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 gap-10" >
                    <Hero />

                    <CardsClimas />
                </div>
            </main>
        </>
    )
}