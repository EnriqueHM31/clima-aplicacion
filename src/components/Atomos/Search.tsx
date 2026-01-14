import { motion } from "framer-motion";
import { useClimaStore } from "../../store/Clima";
import { useNavigate } from "react-router-dom";


export default function SearchClima() {
    const { ciudad, dias, handleChangeCiudad, handleChangeDias } = useClimaStore();
    const navigate = useNavigate();

    const handleNavigate = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams();
        params.set("days", String(dias));

        navigate(`/${ciudad}?${params.toString()}`);
        handleChangeCiudad("");
        handleChangeDias(0);
    };

    const OptionsSelect = Array.from({ length: 11 })

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={(e) => {
                e.preventDefault();
                handleNavigate(e);
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
                onChange={(e) => handleChangeCiudad(e.target.value)}
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
            <div className="relative w-full sm:w-50">
                <select
                    value={dias}
                    onChange={(e) => handleChangeDias(Number(e.target.value))}
                    className="
      peer
      appearance-none
      w-full
      rounded-xl
      bg-white/10
      px-4 py-2
      pr-10
      text-white
      outline-none
      ring-1 ring-white/10
      transition
      hover:ring-blue-500
      focus:ring-2 focus:ring-blue-500
      backdrop-blur
      cursor-pointer
    "
                >
                    <option className="bg-slate-900 text-white" value={0}>
                        Hoy
                    </option>

                    <option className="bg-slate-900 text-white" value={2}>
                        Mañana
                    </option>

                    {OptionsSelect.slice(2).map((_, i) => (
                        <option
                            key={i + 2}
                            value={i + 2}
                            className="bg-slate-900 text-white"
                        >
                            Próximos {i + 2} días
                        </option>
                    ))}
                </select>

                {/* ICONO */}
                <svg
                    className="
      pointer-events-none
      absolute
      right-3
      top-1/2
      h-4 w-4
      -translate-y-1/2
      text-slate-400
      transition
      peer-hover:text-blue-400
      peer-focus:text-blue-400
    "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>


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
