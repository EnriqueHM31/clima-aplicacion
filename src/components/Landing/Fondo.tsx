export default function Fondo({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
            <div
                className="pointer-events-none absolute bottom-10 md:bottom-[-45%] left-1/2 h-[190dvh] w-[120dvw] -translate-x-1/2 rounded-full opacity-80 blur-[120px]"
                style={{
                    background: "radial-gradient(ellipse at center, #000 30%, #1e3a8f 40%, transparent 90%)",
                }}
            />

            <div className="relative z-10 pt-6">{children}</div>
        </div>
    );
}
