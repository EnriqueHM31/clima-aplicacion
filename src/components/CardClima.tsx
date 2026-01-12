import type { ReactNode } from "react";

interface CardClimaProps {
    ciudad: string;
    hora: string;
    temperatura: number;
    viento: string;
    humedad: string;
    icono: ReactNode;
}

export default function CardClima({
    ciudad,
    hora,
    temperatura,
    viento,
    humedad,
    icono,
}: CardClimaProps) {
    return (
        <section className="flex justify-center w-full px-4">
            <article
                className="
          w-full
          max-w-xl
          rounded-2xl
          bg-linear-to-b
          from-black
          via-slate-900
          to-blue-950
          p-6
          text-white
          shadow-xl
          ring-1
          ring-white/10
          backdrop-blur
        "
            >
                {/* Header */}
                <header className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-blue-400">
                        {ciudad}
                    </h2>
                    <time className="text-sm text-slate-400">
                        {hora}
                    </time>
                </header>

                {/* Contenido principal */}
                <main className="mt-6 flex justify-center items-center text-blue-400">
                    <div className="h-24 w-24">
                        {icono}
                    </div>
                    <p className="text-6xl font-bold tracking-tight text-white">
                        {temperatura}°
                    </p>
                </main>

                {/* Detalles */}
                <footer className="mt-6 flex justify-between text-sm text-slate-300">
                    <p className="flex items-center gap-2">
                        🌬 <span>{viento}</span>
                    </p>
                    <p className="flex items-center gap-2">
                        💧 <span>{humedad}</span>
                    </p>
                </footer>
            </article>
        </section>
    );
}
