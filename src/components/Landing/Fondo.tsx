export default function Fondo({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

            <div
                className="
            pointer-events-none
            absolute
            bottom-[-45%]
            left-1/2
            -translate-x-1/2
            w-screen
            h-screen
            rounded-full
            blur-[120px]
            opacity-80
          "
                style={{
                    background: "radial-gradient(ellipse at center, #2563eb 0%, #1e3a8a 35%, transparent 70%)"
                }}
            />

            <div className="relative z-10 p-6">
                {children}
            </div>

        </div>
    );
}
