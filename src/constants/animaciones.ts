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