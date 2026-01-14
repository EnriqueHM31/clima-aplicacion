import { motion } from "framer-motion";
import { obtenerClimaLugar } from "../../services/Clima";
import { useClimaStore } from "../../store/Clima";


export default function SearchClima() {
    const { ciudad, dias, handleChangeCiudad, handleChangeDias } = useClimaStore();

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={(e) => {
                e.preventDefault();
                obtenerClimaLugar(ciudad, dias);
            }}
            className="
         
        flex flex-col gap-4
        sm:flex-row
        items-center
        justify-center
        max-w-4xl
        w-fit
      "
        >
            {/* ===== Ciudad ===== */}
            <input
                type="text"
                placeholder="Ej. Ciudad de México"
                value={ciudad}
                onChange={() => handleChangeCiudad(ciudad)}
                className="
          w-full sm:w-72
          rounded-xl
          bg-white/10
          px-5 py-2
          text-white
          placeholder:text-slate-400
          outline-none
          ring-1 ring-white/10
          focus:ring-2 focus:ring-blue-500
          backdrop-blur
        "
                defaultValue={ciudad}
            />

            {/* ===== Días ===== */}
            <select
                value={dias}
                onChange={(e) => handleChangeDias(Number(e.target.value))}
                className="
          w-full sm:w-50
          rounded-xl
          bg-white/10
          px-4 py-2
          text-white
          outline-none
          ring-1 ring-white/10
          focus:ring-2 focus:ring-blue-500
          backdrop-blur
        "
            >
                <option className="bg-slate-100" value={0}>Hoy</option>
                <option value={1}>Mañana</option>

                {Array.from({ length: 13 }, (_, i) => (
                    <option key={i + 2} value={i + 2}>
                        Proximos {i + 2} días
                    </option>
                ))}
            </select>

            {/* ===== Botón ===== */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="
          w-full sm:w-auto
          rounded-xl
          bg-blue-600
          px-6 py-2
          font-semibold
          text-white
          shadow-lg shadow-blue-600/30
          hover:bg-blue-500
          transition
          cursor-pointer
        "
            >
                Buscar clima
            </motion.button>
        </motion.form>
    );
}
