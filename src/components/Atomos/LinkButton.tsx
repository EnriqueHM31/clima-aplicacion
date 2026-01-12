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
            className="
        bg-white
        text-blue-950
        px-4
        py-2
        rounded-md
        font-bold
        flex
        items-center
        gap-2
        cursor-pointer
        hover:bg-blue-700
        hover:text-white
        transition-all
        duration-300
        ease-in
      "
            initial={variants.initial}
            animate={variants.animate}
            transition={variants.transition}
        >
            <span>{text}</span>
            {icon}
        </motion.a>
    );
}
