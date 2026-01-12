import { FaGithub } from "react-icons/fa"
import LinkButton from "../Atomos/LinkButton"
import ICONO from "/logo.ico"
import { Link } from "react-router-dom";


export default function NavBar() {

    return (
        <nav className="flex md:flex-row flex-col justify-between items-center py-1  w-full max-w-7xl mx-auto gap-4 mb-4">
            <Link to="/" className="flex items-center gap-4">
                <picture className="size-12 bg-white rounded-full p-2 object-cover flex items-center justify-center">
                    <img src={ICONO} alt="logo" className=" object-cover" />
                </picture>
                <h1 className="text-white text-2xl font-bold">Aplicacion del clima</h1>
            </Link>
            <LinkButton text="Portafolio de proyectos HM" icon={<FaGithub />} />
        </nav>
    )
}