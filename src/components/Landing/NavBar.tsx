import { FaGithub } from "react-icons/fa"
import LinkButton from "../Atomos/LinkButton"
import ICONO from "/logo.ico"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Target, Transition } from "framer-motion";

export interface MotionVariant {
    initial: Target;
    animate: Target;
    transition?: Transition;
}
export default function NavBar() {
    const buttonVariants: MotionVariant = {
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
    return (
        <nav className="flex md:flex-row flex-col justify-between items-center py-1  w-full max-w-7xl mx-auto gap-4 mb-4">
            <Link to="/" className="flex items-center gap-4">
                <motion.picture className="size-12 bg-white rounded-full p-2 object-cover flex items-center justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}>
                    <img src={ICONO} alt="logo" className=" object-cover" />
                </motion.picture>
                <motion.h1 className="text-white text-2xl font-bold"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}>
                    Aplicacion del clima
                </motion.h1>
            </Link>
            <LinkButton text="Portafolio de proyectos HM" icon={<FaGithub />} variants={buttonVariants} />
        </nav>
    )
}