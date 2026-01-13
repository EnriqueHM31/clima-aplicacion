import { motion, type Variants } from "framer-motion";
type Easing =
    | "linear"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | number[]
    | ((v: number) => number)

const containerVariants = {
    animate: {
        transition: {
            staggerChildren: 0.08,
            repeat: Infinity,
        },
    },
};

const itemVariants = {
    initial: {
        opacity: 0.3,
        scale: 0.8,
        backgroundPosition: "0% 50%",
    },
    animate: {
        opacity: 1,
        scale: 1,
        backgroundPosition: "100% 50%",
        transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "ease" as Easing,
        },
    },
};

export default function LoaderGrid() {
    return (
        <div className="flex min-h-[90dvh] items-center justify-center">
            <motion.div
                variants={containerVariants}
                animate="animate"
                className="
          grid
          grid-cols-3
          gap-3
          rounded-2xl
          bg-linear-to-br
          p-6
          shadow-2xl
          ring-1
          ring-white/10
        "
            >
                {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants as Variants}
                        initial="initial"
                        animate="animate"
                        className="
              h-8
              w-8
              rounded-md
              bg-linear-to-r
              from-blue-900
              via-cyan-600
              to-blue-950
              bg-size-[200%_200%]
              shadow-md
            "
                    />
                ))}
            </motion.div>
        </div>
    );
}
