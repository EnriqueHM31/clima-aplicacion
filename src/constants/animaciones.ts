import type { Easing } from "framer-motion";
import type { MotionVariant } from "../types";

export const buttonNavBarVariants: MotionVariant = {
    initial: {
        opacity: 0,
        x: 50,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    transition: {
        duration: .4, ease: "linear"
    },
};


export const containerVariantsLoading = {
    animate: {
        transition: {
            staggerChildren: 0.08,
            repeat: Infinity,
        },
    },
};

export const itemVariantsLoading = {
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
