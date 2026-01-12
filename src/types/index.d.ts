import type { Target, Transition } from "framer-motion";

export interface MotionVariant {
    initial: Target;
    animate: Target;
    transition?: Transition;
}