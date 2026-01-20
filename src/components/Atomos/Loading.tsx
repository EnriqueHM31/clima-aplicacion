import { motion, type Variants } from "framer-motion";
import { containerVariantsLoading, itemVariantsLoading } from "../../constants/animaciones";

export default function LoaderGrid() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <motion.div
                variants={containerVariantsLoading}
                animate="animate"
                className="grid grid-cols-3 gap-3 rounded-2xl bg-linear-to-br p-6 shadow-2xl ring-1 ring-white/10"
            >
                {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariantsLoading as Variants}
                        initial="initial"
                        animate="animate"
                        className="h-8 w-8 rounded-md bg-linear-to-r from-blue-900 via-cyan-600 to-blue-950 bg-size-[200%_200%] shadow-md"
                    />
                ))}
            </motion.div>
        </div>
    );
}
