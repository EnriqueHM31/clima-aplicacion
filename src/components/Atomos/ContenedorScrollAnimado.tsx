import { motion } from "framer-motion";

interface ContenedorScrollAnimadoProps {
    children: React.ReactNode;
}

export default function ContenedorScrollAnimado({ children }: ContenedorScrollAnimadoProps) {
    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative h-48 overflow-x-auto overflow-y-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 max-w-4xl mx-auto scroll-estilado"
        >
            <div className="timeline-scroll-inline animate-expand-horizontally sticky top-0 left-0 z-10 h-2 w-full origin-left bg-linear-to-r from-blue-500 to-blue-700"></div>

            <div className="flex h-full w-5xl items-center gap-4"></div>
            <div className="flex h-full w-5xl items-center gap-4 p-5">

                {children}
            </div>
        </motion.div>
    )
}