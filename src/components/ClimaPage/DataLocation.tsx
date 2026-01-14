import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaGlobe } from "react-icons/fa";

interface Location {
    name: string;
    country: string;
    region: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
}

interface LocationInfoBarProps {
    location: Location;
}

export default function LocationInfoBar({ location }: LocationInfoBarProps) {
    const localTime = new Date(location.localtime_epoch * 1000).toLocaleTimeString(
        "en-US",
        {
            hour: "2-digit",
            minute: "2-digit",
        }
    );

    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" w-full rounded-2xl px-6 py-4 text-white shadow-lg ring-1 ring-white/10 backdrop-blur border-b-2 border-slate-700  mb-4 max-w-6xl mx-auto"
        >
            {/* Fila superior */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="size-5 text-blue-400" />
                    <h1 className="text-lg font-semibold">
                        {location.name}
                        <span className="text-slate-400 font-normal">
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
