import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Link, useMatch } from "react-router-dom";
import { buttonNavBarVariants } from "../../constants/animaciones";
import LinkButton from "../Atomos/LinkButton";
import SearchClima from "../Atomos/Search";
import ICONO from "/logo.ico";

export default function NavBar() {

    const matchLugar = useMatch("/:lugar");

    return (
        <nav
            className={`mx-auto mb-4 flex w-full max-w-6xl  items-center justify-between gap-4 py-1 md:flex-row
            ${matchLugar ? "flex-col gap-8" : "flex-row gap-4"}
        `}>
            <Link to="/" className="flex items-center gap-2 md:gap-4">
                <motion.picture
                    className="flex size-8 md:size-12 items-center justify-center rounded-full bg-white object-cover md:p-2 p-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                >
                    <img src={ICONO} alt="logo" className="object-cover" />
                </motion.picture>
                <motion.h1
                    className="text-lg md:text-2xl font-bold text-white"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                >
                    Aplicacion del clima
                </motion.h1>
            </Link>
            {
                matchLugar
                    ? <div> <SearchClima /> </div>

                    : <LinkButton
                        text="Portafolio de proyectos HM"
                        icon={<FaGithub className="size-5 text-white" />}
                        variants={buttonNavBarVariants}
                    />
            }

        </nav>
    );
}
