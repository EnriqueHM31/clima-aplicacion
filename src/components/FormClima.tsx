import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useClimaStore } from "../store/Clima";

export default function FormClima() {
    const { ciudad, handleChangeCiudad } = useClimaStore();
    const navigate = useNavigate();

    const handleBuscarClima = (e: React.FormEvent) => {
        e.preventDefault();

        if (!ciudad.trim()) return;

        handleChangeCiudad("");
        navigate(`/${encodeURIComponent(ciudad.trim())}`);
    };

    return (
        <motion.form
            onSubmit={handleBuscarClima}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row items-center justify-center"
        >
            <input
                type="text"
                placeholder="Ej. Ciudad de México"
                className=" w-full sm:w-80 rounded-xl bg-white/10 px-5 py-3 text-white placeholder:text-slate-400 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 backdrop-blur"
                onChange={(e) => handleChangeCiudad(e.target.value)}
                value={ciudad}
            />

            <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!ciudad.trim()}
                className=" w-full sm:w-auto rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Buscar clima
            </motion.button>
        </motion.form>
    );
}
