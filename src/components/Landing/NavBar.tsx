import { FaGithub } from "react-icons/fa";
import LinkButton from "../Atomos/LinkButton";
import ICONO from "/logo.ico";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonNavBarVariants } from "../../constants/animaciones";

export default function NavBar() {
    return (
        <nav className="mx-auto mb-4 flex w-full max-w-7xl flex-col items-center justify-between gap-4 py-1 md:flex-row">
            <Link to="/" className="flex items-center gap-4">
                <motion.picture
                    className="flex size-12 items-center justify-center rounded-full bg-white object-cover p-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                >
                    <img src={ICONO} alt="logo" className="object-cover" />
                </motion.picture>
                <motion.h1
                    className="text-2xl font-bold text-white"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                >
                    Aplicacion del clima
                </motion.h1>
            </Link>
            <LinkButton
                text="Portafolio de proyectos HM"
                icon={<FaGithub />}
                variants={buttonNavBarVariants}
            />
        </nav>
    );
}
