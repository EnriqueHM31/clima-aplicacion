import { motion } from "framer-motion";
import type { MotionVariant } from "../../types";

interface PropsLinkButton {
    text: string;
    icon: React.ReactNode;
    variants: MotionVariant;
}

export default function LinkButton({ text, icon, variants }: PropsLinkButton) {
    return (
        <motion.a
            href="https://github.com/EnriqueHM31?tab=repositories"
            target="_blank"
            className="flex cursor-pointer items-center gap-2 rounded-md bg-white px-4 py-2 font-bold text-blue-950 transition-all duration-300 ease-in hover:bg-blue-700 hover:text-white"
            initial={variants.initial}
            animate={variants.animate}
            transition={variants.transition}
        >
            <span>{text}</span>
            {icon}
        </motion.a>
    );
}
