import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaGlobe } from "react-icons/fa";
import type { LocationInfoBarProps } from "../../types/componentes.d";
import { getLocalTime } from "../../utils/fechas";

export default function LocationInfoBar({ location }: LocationInfoBarProps) {
    const localTime = getLocalTime(location.localtime_epoch);

    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto my-4 w-full max-w-6xl rounded-2xl border-b-2 border-slate-700 px-4 py-4 text-white ring-1 ring-white/10 backdrop-blur"
        >
            {/* Fila superior */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="size-5 text-blue-400" />
                    <h1 className="text-lg font-semibold">
                        {location.name}
                        <span className="font-normal text-slate-400">
                            {" "}
                            · {location.region}, {location.country}
                        </span>
                    </h1>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-300">
                    <FaClock className="size-5 text-blue-400" />
                    <time>{localTime}</time>
                    <span className="text-slate-500">({location.tz_id})</span>
                </div>
            </div>

            {/* Fila inferior */}
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-4">
                    <FaGlobe className="size-5 text-blue-400" />
                    <span>
                        Lat {location.lat.toFixed(2)} · Lon {location.lon.toFixed(2)}
                    </span>
                </div>
            </div>
        </motion.section>
    );
}
