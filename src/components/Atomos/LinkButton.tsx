import { motion } from "framer-motion";
import type { PropsLinkButton } from "../../types/componentes.d";

export default function LinkButton({ text, icon, variants }: PropsLinkButton) {
    return (
        <motion.a
            href="https://github.com/EnriqueHM31?tab=repositories"
            target="_blank"
            className="flex cursor-pointer items-center gap-2 rounded-md md:bg-white/10 bg-white/20 px-4 py-2 font-bold text-blue-950 transition-all duration-300 ease-in hover:bg-white/15 hover:text-white border border-gray-700 "
            initial={variants.initial}
            animate={variants.animate}
            transition={variants.transition}
        >
            <span className="hidden md:block text-gray-400">{text}</span>
            {icon}
        </motion.a>
    );
}
